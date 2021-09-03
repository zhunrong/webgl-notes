<template>
  <div class="glsl-canvas">
    <canvas ref="canvas" width="720" height="320"></canvas>
  </div>
</template>

<script>
import GlslCanvas from "../lib/glslCanvas";

const DEFAULT_FRAGMENT = `
precision mediump float;
uniform float u_time;
uniform vec2 u_resolution;

void main() {
  vec2 coord = gl_FragCoord.xy / u_resolution;
  vec3 color = vec3(coord, sin(u_time) * 0.5 + 0.5);
  gl_FragColor = vec4(color, 1.0);
}
`;

export default {
  props: {
    fragmentShader: {
      type: String,
      default: DEFAULT_FRAGMENT,
    },
    vertexShader: {
      type: String,
    },
    uniforms: {
      type: Object,
      default: () => ({}),
    },
  },
  watch: {
    fragmentShader: 'init',
    vertexShader: 'init',
    uniforms: 'init'
  },
  mounted() {
    this.sanbox = new GlslCanvas(this.$refs.canvas);
    this.init();
  },
  beforeDestroy() {
    this.sanbox && this.sanbox.destroy();
  },
  methods: {
    init() {
      this.applyShader();
      this.setUniforms();
    },
    applyShader() {
      this.sanbox.load(this.fragmentShader, this.vertexShader);
    },
    setUniforms() {
      Object.keys(this.uniforms).forEach((key) => {
        const value = this.uniforms[key];
        if (Array.isArray(value)) {
          this.sanbox.setUniform(key, ...value);
        } else {
          this.sanbox.setUniform(key, value);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.glsl-canvas {
  border: 10px solid #282c34;
  border-radius: 6px;
  canvas {
    display: block;
  }
}
</style>
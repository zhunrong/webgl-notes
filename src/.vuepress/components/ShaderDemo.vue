<template>
  <div class="shader-demo">
    <div ref="container" class="container">
      <!-- 容器 -->
    </div>
  </div>
</template>

<script>
import {
  WebGLRenderer,
  OrthographicCamera,
  Scene,
  Vector2,
  PlaneBufferGeometry,
  Mesh,
  ShaderMaterial,
  UniformsUtils,
} from "three";

export default {
  props: {
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  mounted() {
    this.renderer = new WebGLRenderer();
    this.$refs.container.appendChild(this.renderer.domElement);
    this.resize();

    this.camera = new OrthographicCamera(-200, 200, 200, -200, 0.1, 2000);
    this.camera.position.set(0, 0, 2000);

    this.scene = new Scene();

    this.setPlane();

    this.renderLoop();
  },
  beforeDestroy() {
    if (this.frameId !== undefined) {
      cancelAnimationFrame(this.frameId);
    }
  },
  methods: {
    resize() {
      const { width, height } = this.$refs.container.getBoundingClientRect();
      this.resolution = new Vector2(width, height);
      this.renderer.setSize(width, height);
    },
    setPlane() {
      if (this.plane) {
        // remove
      }
      const geometry = new PlaneBufferGeometry(
        this.resolution.x,
        this.resolution.y
      );
      const material = new ShaderMaterial({
        ...this.options,
        uniformsNeedUpdate: true,
        uniforms: UniformsUtils.merge([
          {
            u_Resolution: {
              value: this.resolution,
            },
            u_Time: {
              value: 0,
            },
          },
          this.options.uniforms,
        ]),
      });
      this.plane = new Mesh(geometry, material);
      this.scene.add(this.plane);
    },
    renderLoop() {
      this.plane.material.uniforms["u_Time"].value += 0.01;
      this.renderer.render(this.scene, this.camera);
      this.frameId = requestAnimationFrame(this.renderLoop);
    },
  },
};
</script>

<style lang="scss" scoped>
.shader-demo {
  height: 400px;
  padding: 30px;
  border: 1px dashed #ccc;
  .container {
    height: 100%;
  }
}
</style>

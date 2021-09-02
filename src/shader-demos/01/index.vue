<template>
  <div>
    <shader-demo :options="options" />
  </div>
</template>

<script>
import * as THREE from "three";
import fragmentShader from './shader.frag';
import vertexShader from './shader.vert';

export default {
  computed: {
    options() {
      return {
        fragmentShader,
        vertexShader,
        uniforms: THREE.UniformsUtils.merge([
          {
            u_LineColor: {
              value: new THREE.Vector3(1, 0, 0),
            },
            u_BgColor: {
              value: new THREE.Vector3(0, 0, 0),
            },
            u_AxisColor: {
              value: new THREE.Vector3(1, 1, 1),
            },
          },
        ]),
        uniformsNeedUpdate: true,
      };
    },
  },
};
</script>

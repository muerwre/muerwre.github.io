Fragment shaders describe ==how polygons are painted== (or textured). Read [Basics of WebGL (Drawing a Cube)](Basics%20of%20WebGL%20(Drawing%20a%20Cube).md) first.

## Sample fragment vertex

Parameters could be passed here as written at [Vertex Shaders](Vertex%20Shaders.md).

```c
precision highp float;

// parameter from Vertex Shader
varying vec4 v_positionWithOffset;
// parameters passed from Javascript loop
uniform float slide;
uniform float aspect;

void main(void){
  // color, attached to current verticle {r,g,b,alpha}
  // same a[
  //   v_positionWithOffset.x,
  //   v_positionWithOffset.y, 
  //   v_positionWithOffset.z, 
  //   1
  //  ]
  gl_FragColor=vec4(v_positionWithOffset.xyz,1);
}```
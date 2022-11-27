Read [Basics of WebGL (Drawing a Cube)](Basics%20of%20WebGL%20(Drawing%20a%20Cube).md) first.

**Vertex Shaders** define vertice positions in 3D-space. That's just a function, that defines `gl_Position` value by applying different transformations to it. 

## Sample code

```c
// current vertice position {x,y,z,w}
attribute vec4 aVertexPosition;
// final vertice position with all transformations applied,
// that will be passed to Fragment Shader
varying vec4 v_positionWithOffset;
// Parameters passed from Javascript loop
uniform float slide;
uniform float aspect;

void main(){
  // float array of 4 elements, same as [slide,slide,slide,1]
  vec4 scale=vec4(vec3(slide),1);
  // float array of 4 elements, same as [aspect,1,1,1]
  vec4 aspectRatioFix=vec4(aspect,vec3(1));
  // vertice position, multiplied with matrices of scale and aspect ratio
  gl_Position=aVertexPosition*scale*aspectRatioFix,
  // vertice offset, that will be passed to fragment shader
  v_positionWithOffset=gl_Position+vec4(1,1,1,1);
}
```

## Passing parameters to VertexShader

Search for `Uniforms` [at open.gl](https://open.gl/drawing) for further reading.

There're 3 ways to pass parameters.

- `attribute` are parameters, that won't change. Good for vertex buffers.
- `uniform` are meant to change over the time. Good for passing transformations.
- `varying` are parameters, that's shared between Vertex and [Fragment Shaders](Fragment%20Shaders.md).

## Applying transformations

Every vertice position is defined as `{x,y,z,w}`, where `w` is a common denominator, that's used to achieve fast coord transformations by multiplying number of square matrices with original vertice coordinates.

==We don't change vertice position buffer==, because it's slow when being run inside Javascript loop, we ==pass transformation matrices== instead and ==multiply vertice positions with transformation matrices== inside a Graphic Card's GPU, because that's what GPU made for.

Good explanation can be found here: [open.gl](https://open.gl/transformations).
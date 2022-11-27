## Helpful documentation
- https://open.gl/
- This youtube series: [Basics](https://www.youtube.com/watch?v=kB0ZVUrI4Aw), [Making a cube, applying transformations](https://www.youtube.com/watch?v=3yLL9ADo-ko), [Texturing](https://www.youtube.com/watch?v=hpnd11doMgc&t=52s)

## Vertices and Indices

**Vertices** are points with specific coordinates `{x,y,z}` in a 3D-space. We can build any figure by connecting **vertices** in triangles with **indices**.

## Shaders

Shaders are functions, written in C, which describe how to draw and color polygons to Graphic Card.

[Vertex Shaders](Vertex%20Shaders.md) describe **vertice** positions, so Graphic Card can position them by connecting with **indices** and project to 2D canvas.

[Fragment Shaders](Fragment%20Shaders.md) describe the way polygons should be colored by assigning colors to Vertices or by applying textures  to polygons.

Shaders can have parameters passed from Javascript code (`uniforms`, `varyings` and `attributes`). [Fragment Shaders](Fragment%20Shaders.md) can also access data from [Vertex Shaders](Vertex%20Shaders.md) (that ones called `varyings`).

![](https://open.gl/media/img/c2_pipeline.png)
## Program

Program, as far as I understand, is a scene, that's described with **Vertices**, **Indices**, specific [Vertex Shaders](Vertex%20Shaders.md) and [Fragment Shaders](Fragment%20Shaders.md).

## Applying transformations

The best way to change positions inside [Vertex Shaders](Vertex%20Shaders.md) or color in [Fragment Shaders](Fragment%20Shaders.md) is to pass parameters (also called `uniforms` and `varyings`). 

Read about that at [open.gl](https://open.gl/transformations) and at [Vertex Shaders](Vertex%20Shaders.md).

## Source code with explanations

```typescript
// render-a-cube.ts
import { createShader } from "./create-shader";
import vxShader from "./vertex.glsl?raw";
import fgShader from "./fragment.glsl?raw";

const canvas = document.getElementyId('view');
const ctx = canvas.getRenderingContext('webgl');

// should be put inside requestAnimationFrame
drawCube(ctx)(); 

function drawCube (
  gl: WebGL2RenderingContext, 
  width: number,
  height: number
) {
  // Initializing viewport
  gl.viewport(0, 0, width, height);
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  const prg = gl.createProgram();
  if (!prg) {
    throw new Error("Can't init programm");
  }

  // Setting up VERTEX and FRAGMENT shaders
  const vx = createShader(gl, vxShader, gl.VERTEX_SHADER);
  gl.attachShader(prg, vx);
  const fx = createShader(gl, fgShader, gl.FRAGMENT_SHADER);
  gl.attachShader(prg, fx);
  gl.linkProgram(prg);
  if (!gl.getProgramParameter(prg, gl.LINK_STATUS)) {
    throw new Error("Could not initialise shaders");
  }

  // Cube's vertices Array<[x,y,z]>, 8 items
  const vertices = [
    -1, -1, -1, // 0
	1, -1, -1,  // 1
    1, 1, -1,   // 2
    -1, 1, -1,  // 3
    -1, -1, 1,  // 4
    1, -1, 1,   // 5
    1, 1, 1,    // 6
    -1, 1, 1,   // 7
  ];

  // indices, that form triangles, that form cube sides
  const indices = [
    2, 1, 0, // side 0 (first triangle)
    0, 3, 2, // side 0 (second triangle)
    0, 4, 7, // side 1 (first triangle)
    7, 3, 0, // side 1 (second triangle)
    0, 1, 5, // ...
    5, 4, 0, 
    1, 2, 6, 
    6, 5, 1, 
    2, 3, 7, 
    7, 6, 2, 
    4, 5, 6, 
    6, 7, 4,
  ];

  // createe a vertex buffer and bind vertices to it
  const squareVertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, squareVertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  // create a vertex buffer and bind indices to it
  const squareIndexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, squareIndexBuffer);
  gl.bufferData(
    gl.ELEMENT_ARRAY_BUFFER,
    new Uint16Array(indices),
    gl.STATIC_DRAW
  );
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

  // initial drawing
  gl.clearColor(0.0, 0.0, 0.0, 0.0);
  gl.enable(gl.DEPTH_TEST);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.viewport(0, 0, width, height);

  // bind squareVertexBuffer as vertex positions buffer
  gl.bindBuffer(gl.ARRAY_BUFFER, squareVertexBuffer);
  
  // send every 3 bytes from squareVertexBuffer as {x,y,z} for each verticle
  gl.vertexAttribPointer(
	  gl.getAttribLocation(prg, "aVertexPosition"), 
	  3, // 3 bytes-long
	  gl.FLOAT,
	  false, // don't normalize (int to float)
	  0, 
	  0
  );
  // send vertice buffer as `aVertexPosition` attribute inside vertex shader
  gl.enableVertexAttribArray(
	  gl.getAttribLocation(prg, "aVertexPosition")
  );

  let i = 0;
  let speed = 0.01;

  // that's the main rendering callback
  return () => {
    gl.useProgram(prg);

    const scale = i * 0.25 + 0.25;

    // used for scaling inside Vertex Shader
    gl.uniform1f(gl.getUniformLocation(prg, "slide"), scale);
	// GL Screen is square, so we need to fix it's aspect ration
    gl.uniform1f(gl.getUniformLocation(prg, "aspect"), height / width);

    gl.bindBuffer(
	    gl.ELEMENT_ARRAY_BUFFER, 
	    squareIndexBuffer
	);
	
    gl.drawElements(
	    gl.TRIANGLES, 
	    indices.length, 
	    gl.UNSIGNED_SHORT, 
	    0,
	);

    if (i > 1 || i < 0) {
      speed = -speed;
    }

    i += speed;
  };
};
```

## Shader compiler

```typescript
// create-shader.ts
export const createShader = (
  gl: WebGL2RenderingContext,
  sourceCode: string,
  type: number, // gl.VERTEX_SHADER or gl.FRAGMENT_SHADER
) => {
  const shader = gl.createShader(type);
  if (!shader) {
    throw new Error(`Can't init shader`);
  }

  gl.shaderSource(shader, sourceCode);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const info = gl.getShaderInfoLog(shader);
    throw `Could not compile WebGL program. \n\n${info}`;
  }

  return shader;
};
```

## Vertex Shader Example

Read more at [Vertex Shaders](Vertex%20Shaders.md)

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

## Fragment Shader Example

Read more at [Fragment Shaders](Fragment%20Shaders.md).

```c
precision highp float;

// parameter from Vertex Shader
varying vec4 v_positionWithOffset;

void main(void){
  // color, attached to current verticle {r,g,b,alpha}
  // same a[
  //   v_positionWithOffset.x,
  //   v_positionWithOffset.y, 
  //   v_positionWithOffset.z, 
  //   1
  //  ]
  gl_FragColor=vec4(v_positionWithOffset.xyz,1);
}
```
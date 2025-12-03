Rendering items on #canvas in main loop ==might cause interface freezes==, preventing render process from executing properly by flooding execution stack with operations.

To handle it properly, we can start separate #worker thread, that will handle rendering in its own event loop, so that won't affect the source tab's event loop.

Workers can have access to [Transferrable Objects](https://developer.mozilla.org/en-US/docs/Glossary/Transferable_objects) from main thread by receiving memory address. ==That's a lot faster than cloning==. In this case [ImageBitmap](https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmap) is transferrable.

Code for the main thread component:

```typescript
// main.ts
const instance = new Worker('./render-worker.ts');
const canvas = document.getElementById('view');

// attaching event listener to worker
instance.onmessage = (event: MessageEvent) => {
	const ctx = canvas?.getContext("2d");
	if (!ctx) {
		throw new Error(`Can't get 2D context`);
	}
	
	ctx.drawImage(event.data as ImageBitmap, 0, 0);
}

// sending canvas contents to worker
const renderInCanvas = () => {
	if (!canvas.current) {
	  return;
	}
	
	createImageBitmap(canvas.current).then(image => {
		instance.postMessage(image, { transfer: [image] })
	});
};
```

Worker code:

```typescript
// render-worker.ts
export default () => {
  self.onmessage = (message: MessageEvent) => {
    const data = message.data;

    if (!(data instanceof ImageBitmap)) {
      throw new Error('Received unknown data')
    }

	// OffscreenCanvas can be set up inside workers
    const canvas = new OffscreenCanvas(data.width, data.height);
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      throw new Error(`Can't get 2D context`);
    }

    ctx.drawImage(data, 0, 0);

	// That will block execution inside worker for 
	// a couple of seconds
    doHardRenderingStuffHere(ctx, data.width, data.height);

	// Sending resulting image back to main thread
    createImageBitmap(canvas).then((image) => {
      self.postMessage(image, { transfer: [image] });
    });
  };
};
```
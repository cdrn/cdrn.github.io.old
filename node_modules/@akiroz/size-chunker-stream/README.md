## size-chunker-stream 

A NodeJS transform stream for chunking raw data into constant-size chunks. Useful for consuming raw media streams where chunk size = 1 frame.

### API

```js
import SizeChunker from "@akiroz/size-chunker-stream";

const chunker = new SizeChunker({ chunkSize: 640 * 480 * 3 });

process.stdin.pipe(chunker);

chunker.on("data", (frame) => {
    // Do stuff with frame
});

```

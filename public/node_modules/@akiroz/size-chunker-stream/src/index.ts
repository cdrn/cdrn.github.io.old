import { Transform } from "stream";

export default class SizeChunker extends Transform {
    chunkSize: number;
    
    fill = 0;
    chunks: Buffer[] = [];

    constructor({ chunkSize }: { chunkSize: number }) {
        super();
        this.chunkSize = chunkSize;
    }

    _transform(chunk: Buffer | string, encoding: string, callback: (err?: Error) => any) {
        if (!Buffer.isBuffer(chunk)) {
            callback(Error("Received non-buffer chunk"));
            return;
        }
        
        this.fill += chunk.length;
        this.chunks.push(chunk);
        
        while (this.fill >= this.chunkSize) {
            this.push(Buffer.concat(this.chunks, this.chunkSize));
            const lastChunk = this.chunks[this.chunks.length - 1];
            const residue = this.fill - this.chunkSize;
            this.chunks = residue === 0 ? [] : [Buffer.from(lastChunk.slice(lastChunk.length - residue))];
            this.fill = residue;
        }
        
        callback();
    }
}
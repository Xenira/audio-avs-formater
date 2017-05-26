import { Transform } from 'stream';

export class IAudioFormat {
    float: boolean = false;
}

export class AudioAvsFormater extends Transform {
    constructor(private inputFormat: IAudioFormat) {
        super();
    }

    _write(chunk: Buffer, encoding: any, callback: Function) {
        this.getSamples(chunk);
        callback();
    }

    getSamples(chunk: Buffer) {
        if (this.inputFormat.float) {

        } else {

        }
    }
}

class ResampleStream extends Transform {

}
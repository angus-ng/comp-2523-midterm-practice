import { readFile } from "fs/promises";
import { IImportable } from "./IImportable";

export class LocalImporter implements IImportable{
    private _path!: string;
    constructor(path:string){
        this._path = path;
    }

    async loadPlaylist (path = this._path){
        console.log(`Your playlist at location ${path} will be loaded`);
        const playlist = await readFile(path);
        return playlist;
    }
}

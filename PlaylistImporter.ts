import { IImportable } from "./IImportable";

export class PlaylistImporter{
    private _importer;
    constructor (importer: IImportable){
        this._importer = importer;
    }

    importPlaylist(path:string){
        return this._importer.loadPlaylist(path)
    }
}
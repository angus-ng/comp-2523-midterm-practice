import { Album } from "./Album";
import { IImportable } from "./IImportable";
import { Playlist } from "./Playlist";
import { Artist } from "./artist";

export class CloudImporter implements IImportable{
    private _link!: string
    constructor(link:string){

    }

    loadPlaylist(link = this._link){
        let newPlaylist = new Playlist("songs")
        newPlaylist.addAlbum(new Album("myTitle", new Artist("My Artist"), 2024))
        return new Promise((res,rej) => {
            res(newPlaylist)
        })
    }
}
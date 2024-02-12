import { Album } from "./Album"

export class Artist {
    private _name = ""
    private _album!: Album[]

    constructor(name:string, album?:Album){
        this._name = name;
        if(album){
            this.addAlbum(album)
        }
    }

    addAlbum(album:Album) {
        this._album.push(album)
    }
}
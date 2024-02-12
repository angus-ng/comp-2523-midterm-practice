import { Album } from "./Album";
import { Song } from "./Song"

export class Playlist {
    private _name = ""
    private _listOfSongs!: Song[]

    constructor(name:string){
        this.name = name;
    }

    get name(){
        return this._name;
    }
    get listOfSongs(){
        return this._listOfSongs;
    }

    set name(name:string){
        this._name = name;
    }

    set listOfSongs(list: Song[]){
        this._listOfSongs = list;
    }

    addAlbum(album:Album){
        album.tracks.forEach((song) => {
            this.listOfSongs.push(song)
        })
    }
}
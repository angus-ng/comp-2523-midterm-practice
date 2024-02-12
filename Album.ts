import { Song } from "./Song"
import { Artist } from "./artist"

export class Album {
    private _title = ""
    private _Artist!: Artist
    private _year!: number
    private _tracks!: Song[]

    constructor(title: string, artist: Artist, year:number){
        this.title = title;
        this._Artist = artist;
        this._year = year;
        
    }

    get title() {
        return this._title;
    }

    get tracks() {
        return this._tracks;
    }

    set title(title:string) {
        this._title = title;
    }

    addTrack(track:Song){
        this._tracks.push(track);
    }
}
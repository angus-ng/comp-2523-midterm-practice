export interface IImportable {
    loadPlaylist(path:string): Promise<any>;
}
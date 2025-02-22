import { client } from "@/clients/client";
import type { Song } from "@/types/domain";

export class SongClient {
    private static endpoint = "songs";
    private static fields = "id,title,artist.id,artist.name";

    static async findSongs(keyword: string): Promise<Song[]> {
        return await client.getAllContents({
            endpoint: this.endpoint,
            queries: {
                fields: this.fields,
                filters: `title[contains]${keyword}`,
            },
        });
    }

    static async findSongsByArtistId(artistId: string): Promise<Song[]> {
        return await client.getAllContents({
            endpoint: this.endpoint,
            queries: {
                fields: this.fields,
                filters: `artist[equals]${artistId}`,
            },
        });
    }

    static async getSong(id: string): Promise<Song> {
        return await client.get({
            endpoint: this.endpoint,
            contentId: id,
            queries: {
                fields: this.fields,
            },
        });
    }
}

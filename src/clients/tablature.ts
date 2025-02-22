import { client } from "@/clients/client";
import type { Tablature } from "@/types/domain";

export class TablatureClient {
    static endpoint = "tablatures";
    static fields = "id,instrument,link,hasVideo";

    static async findTablatures(songId: string): Promise<Tablature[]> {
        return await client.getAllContents({
            endpoint: this.endpoint,
            queries: { fields: this.fields, filters: `song[equals]${songId}` },
        });
    }

    static async getTablature(id: string): Promise<Tablature> {
        return await client.get({
            endpoint: this.endpoint,
            contentId: id,
            queries: {
                fields: `${this.fields},song.id,song.title,song.artist.id,song.artist.name`,
                depth: 2,
            },
        });
    }
}

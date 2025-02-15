import { client } from "@/clients/client";
import type { Tablature } from "@/types/domain";

export class TablatureClient {
    static endpoint = "tablatures";
    static fields = "id,title,instrument,tablatureLink,artist.id,artist.name";

    static async findTablatures(keyword: string): Promise<Tablature[]> {
        return (
            await client.getList({
                endpoint: this.endpoint,
                queries: { fields: this.fields, filters: `title[contains]${keyword}` },
            })
        ).contents;
    }

    static async findTablaturesByArtist(artistId: string): Promise<Tablature[]> {
        return (
            await client.getList({
                endpoint: this.endpoint,
                queries: { fields: this.fields, filters: `artist[equals]${artistId}` },
            })
        ).contents;
    }
}

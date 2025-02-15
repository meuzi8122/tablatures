import { client } from "@/clients/client";
import type { Tablature } from "@/types/domain";

export class TablatureClient {
    static endpoint = "tablatures";
    static fields = "id,title,instrument,tablatureLink,artist.id,artist.name,hasVideo";

    static async findTablaturesByTitle(keyword: string, instrument: string): Promise<Tablature[]> {
        return await client.getAllContents({
            endpoint: this.endpoint,
            queries: {
                fields: this.fields,
                /* instrumentカラムはセレクトフィールドなので、equalsではなくcontainsを指定する。 */
                filters: `title[contains]${keyword}[and]instrument[contains]${instrument}`,
            },
        });
    }

    static async findTablaturesByArtist(artistId: string): Promise<Tablature[]> {
        return await client.getAllContents({
            endpoint: this.endpoint,
            queries: { fields: this.fields, filters: `artist[equals]${artistId}` },
        });
    }
}

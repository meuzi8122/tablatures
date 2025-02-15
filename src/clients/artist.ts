import { client } from "@/clients/client";
import { Artist } from "@/types/domain";

export class ArtistClient {
    private static endpoint = "artists";
    private static fields = "id,name";

    static async getArtist(id: string): Promise<Artist> {
        return await client.get({
            contentId: id,
            endpoint: this.endpoint,
            queries: {
                fields: this.fields,
            },
        });
    }

    static async findArtists(): Promise<Artist[]> {
        return await client.getAllContents({
            endpoint: this.endpoint,
            queries: { fields: this.fields },
        });
    }
}

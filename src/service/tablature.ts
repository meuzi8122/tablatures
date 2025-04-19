import type { Tablature } from "@/generated/prisma";
import { TablatureCollection, TablatureQuery, TablatureRepositiry } from "@/repository/tablature";

export class TablatureService {
    constructor(private repository: TablatureRepositiry) {}

    async findTablatures(query: TablatureQuery): Promise<TablatureCollection> {
        return this.repository.findTablatures(query);
    }

    async getTablature(id: number): Promise<Tablature> {
        return this.repository.getTablature(id);
    }

    async createTablature(userId: number): Promise<Tablature> {
        return this.repository.createTablature(userId);
    }

    async updateTablature(tablature: Tablature): Promise<Tablature> {
        return this.repository.updateTablature(tablature);
    }

    async deleteTanblature(id: number): Promise<number> {
        return this.repository.deleteTablature(id);
    }
}

import type { Tablature } from "@/generated/prisma";
import { TablatureRepositiry } from "@/repository/tablature";

export class TablatureService {
    constructor(private repository: TablatureRepositiry) {}

    async findTablatures(): Promise<Tablature[]> {
        return this.repository.findTablatures();
    }

    async getTablature(id: number): Promise<Tablature> {
        return this.repository.getTablature(id);
    }

    async createTablature(): Promise<Tablature> {
        return this.repository.createTablature();
    }

    async updateTablature(tablature: Tablature): Promise<Tablature> {
        return this.repository.updateTablature(tablature);
    }

    async deleteTanblature(id: number): Promise<number> {
        return this.repository.deleteTablature(id);
    }
}

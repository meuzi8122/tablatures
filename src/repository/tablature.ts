import { db } from "@/clients/prisma";
import type { Tablature } from "@/generated/prisma";

export interface TablatureRepositiry {
    /* 一覧取得 */
    findTablatures(): Promise<Tablature[]>;
    /* 一件取得 */
    getTablature(id: number): Promise<Tablature>;
    /* 新規作成（作成ボタンの押下で呼び出し。戻り値のIDを元に編集画面に遷移） */
    createTablature(): Promise<Tablature>;
    /* 更新 */
    updateTablature(tablature: Tablature): Promise<Tablature>;
    /* 削除 */
    deleteTablature(id: number): Promise<number>;
}

export class NeonTablatureRepository implements TablatureRepositiry {
    async findTablatures(): Promise<Tablature[]> {
        return await db.tablature.findMany();
    }

    async getTablature(id: number): Promise<any> {
        return db.tablature.findUnique({ where: { id } });
    }

    async createTablature(): Promise<Tablature> {
        return await db.tablature.create({});
    }

    async updateTablature(tablature: Tablature): Promise<Tablature> {
        const { title, artist, createdAt } = tablature;
        return await db.tablature.update({ where: { id: tablature.id }, data: { title, artist, createdAt } });
    }

    async deleteTablature(id: number): Promise<number> {
        await db.tablature.delete({ where: { id } });

        return id;
    }
}

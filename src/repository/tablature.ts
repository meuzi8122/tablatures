import { db } from "@/clients/prisma";
import type { Tablature } from "@/generated/prisma";

const PAGE_SIZE = 10;

export type TablatureCollection = {
    tablatures: Tablature[];
    total: number;
    start: number;
    end: number;
    hasNext: boolean;
};

export type TablatureQuery = {
    artist?: string;
    page?: number;
};

export interface TablatureRepositiry {
    /* 一覧取得 */
    findTablatures(query: TablatureQuery): Promise<TablatureCollection>;
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
    async findTablatures(query: TablatureQuery): Promise<TablatureCollection> {
        const total = await db.tablature.count({
            where: {
                artist: query.artist,
            },
        });

        const currentPage = query.page ? query.page : 1;
        const maxPage = Math.ceil(total / PAGE_SIZE);

        const skip = (currentPage - 1) * PAGE_SIZE;

        const tablatures = await db.tablature.findMany({
            where: {
                artist: query.artist,
            },
            skip: (currentPage - 1) * PAGE_SIZE,
            take: PAGE_SIZE, //10件取得
        });

        const start = skip + 1;
        const end = tablatures.length < PAGE_SIZE ? skip + tablatures.length : skip + PAGE_SIZE;

        return { total, tablatures, start, end, hasNext: currentPage < maxPage };
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

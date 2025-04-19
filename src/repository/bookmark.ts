import { db } from "@/clients/prisma";
import { Bookmark } from "@/generated/prisma";

export interface BookmarkRepository {
    createBookmark(userId: number, tablatureId: number): Promise<Bookmark>;
    deleteBookmark(id: number): Promise<number>;
}

export class NeonBookmarkRepository implements BookmarkRepository {
    async createBookmark(userId: number, tablatureId: number): Promise<Bookmark> {
        return await db.bookmark.create({ data: { userId, tablatureId } });
    }

    async deleteBookmark(id: number): Promise<number> {
        await db.bookmark.delete({ where: { id } });

        return id;
    }
}

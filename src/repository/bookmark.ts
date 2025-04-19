import { db } from "@/clients/prisma";
import { Bookmark } from "@/generated/prisma";

export interface BookmarkRepository {
    findBookmarks(userId: number, tablatureIds: number[]): Promise<Bookmark[]>;
    createBookmark(userId: number, tablatureId: number): Promise<Bookmark>;
    deleteBookmark(userId: number, tablatureId: number): Promise<Bookmark>;
}

export class NeonBookmarkRepository implements BookmarkRepository {
    async findBookmarks(userId: number, tablatureIds: number[]): Promise<Bookmark[]> {
        return await db.bookmark.findMany({ where: { userId, tablatureId: { in: tablatureIds } } });
    }

    async createBookmark(userId: number, tablatureId: number): Promise<Bookmark> {
        return await db.bookmark.create({ data: { userId, tablatureId } });
    }

    async deleteBookmark(userId: number, tablatureId: number): Promise<Bookmark> {
        return db.bookmark.delete({ where: { userId_tablatureId: { userId, tablatureId } } });
    }
}

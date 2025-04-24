import { db } from "@/clients/prisma";
import { Bookmark } from "@/generated/prisma";

export interface BookmarkRepository {
    getBookmark(userId: number, tablatureId: number): Promise<Bookmark | null>;
    createBookmark(userId: number, tablatureId: number): Promise<Bookmark>;
    deleteBookmark(userId: number, tablatureId: number): Promise<Bookmark>;
}

export class NeonBookmarkRepository implements BookmarkRepository {
    async getBookmark(userId: number, tablatureId: number): Promise<Bookmark | null> {
        return await db.bookmark.findUnique({ where: { userId_tablatureId: { userId, tablatureId } } });
    }

    async createBookmark(userId: number, tablatureId: number): Promise<Bookmark> {
        return await db.bookmark.create({ data: { userId, tablatureId } });
    }

    async deleteBookmark(userId: number, tablatureId: number): Promise<Bookmark> {
        return db.bookmark.delete({ where: { userId_tablatureId: { userId, tablatureId } } });
    }
}

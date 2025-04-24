import { Bookmark } from "@/generated/prisma";
import { BookmarkRepository } from "@/repository/bookmark";

export class BookmarkService {
    constructor(private repository: BookmarkRepository) {}

    async getBookmark(userId: number, tablatureId: number): Promise<Bookmark | null> {
        return this.repository.getBookmark(userId, tablatureId);
    }

    async createBookmark(userId: number, tablatureId: number): Promise<Bookmark> {
        return this.repository.createBookmark(userId, tablatureId);
    }

    async deleteBookmark(userId: number, tablatureId: number): Promise<Bookmark> {
        return this.repository.deleteBookmark(userId, tablatureId);
    }
}

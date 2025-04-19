import { Bookmark } from "@/generated/prisma";
import { BookmarkRepository } from "@/repository/bookmark";

export class BookmarkService {
    constructor(private repository: BookmarkRepository) {}

    async findTablatures(userId: number, tablatureIds: number[]): Promise<Bookmark[]> {
        return this.repository.findBookmarks(userId, tablatureIds);
    }

    async createBookmark(userId: number, tablatureId: number): Promise<Bookmark> {
        return this.repository.createBookmark(userId, tablatureId);
    }

    async deleteBookmark(userId: number, tablatureId: number): Promise<Bookmark> {
        return this.repository.deleteBookmark(userId, tablatureId);
    }
}

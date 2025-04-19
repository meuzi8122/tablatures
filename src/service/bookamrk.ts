import { Bookmark } from "@/generated/prisma";
import { BookmarkRepository } from "@/repository/bookmark";

export class BookmarkService {
    constructor(private repository: BookmarkRepository) {}

    async createBookmark(userId: number, tablatureId: number): Promise<Bookmark> {
        return this.repository.createBookmark(userId, tablatureId);
    }

    async deleteBookmark(id: number): Promise<number> {
        return this.repository.deleteBookmark(id);
    }
}

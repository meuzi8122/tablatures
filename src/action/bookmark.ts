"use server";

import { auth, signIn } from "@/auth";
import { NeonBookmarkRepository } from "@/repository/bookmark";
import { BookmarkService } from "@/service/bookamrk";
import { z } from "zod";

const UpdateBookmarkSchema = z.object({
    id: z.string().transform((id) => Number(id)),
});

export async function updateBookmarkAction(formData: FormData) {
    const session = await auth();
    if (!session) {
        await signIn();
        return;
    }

    const result = UpdateBookmarkSchema.safeParse({ id: formData.get("id") });

    if (result.error) {
        console.log(result.error);
        return;
    }

    const service = new BookmarkService(new NeonBookmarkRepository());
    const bookmark = await service.getBookmark(session.user.id, result.data?.id);

    if (bookmark) {
        await service.deleteBookmark(session.user.id, result.data?.id);
    } else {
        await service.createBookmark(session.user.id, result.data?.id);
    }
}

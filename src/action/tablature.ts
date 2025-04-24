"use server";

import { auth } from "@/auth";
import { NeonTablatureRepository } from "@/repository/tablature";
import { TablatureService } from "@/service/tablature";
import { z } from "zod";

type State = {
    status: "SUCCEED" | "FAILED" | null;
    message: string;
};

const UpdateTablatureSchema = z.object({
    id: z.string().transform((id) => Number(id)),
    title: z.string(),
    artist: z.string(),
    instrument: z.string(),
    link: z.union([z.literal(""), z.string().url()]), // 空白文字かURL形式の文字列
    createdAt: z.string().transform((createdAt) => new Date(createdAt)),
});

export async function updateTablatureAction(_: State, formData: FormData): Promise<State> {
    const session = await auth();

    if (!session) {
        return { status: "FAILED", message: "セッションの有効期限が切れています。再度ログインしてください。" };
    }

    const result = UpdateTablatureSchema.safeParse({
        id: formData.get("id"),
        title: formData.get("title"),
        artist: formData.get("artist"),
        instrument: formData.get("instrument"),
        link: formData.get("link"),
        createdAt: formData.get("createdAt"),
    });

    if (!result.success) {
        console.log(result.error.errors);
        return { status: "FAILED", message: "入力内容に誤りがあります。" };
    }

    const tablature = result.data;

    try {
        await new TablatureService(new NeonTablatureRepository()).updateTablature({
            ...tablature,
            userId: session.user.id,
            updatedAt: new Date(),
        });
        return { status: "SUCCEED", message: "TAB譜を更新しました。" };
    } catch (error) {
        return { status: "FAILED", message: "TAB譜の更新に失敗しました。しばらくしてからもう一度お試しください。" };
    }
}

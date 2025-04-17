"use client";

import { tablatureAction } from "@/app/actions/tablature";
import TextInput from "@/components/form/text-input";
import type { Tablature } from "@/generated/prisma";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";

type Props = {
    tablature: Tablature;
};

export default function TablatureForm({ tablature }: Props) {
    const router = useRouter();

    const [result, action, isPending] = useActionState(tablatureAction, null);

    useEffect(() => {
        if (result?.isSuccess != undefined) {
            alert(result.message);
            router.back();
        }
    }, [result?.isSuccess]);

    return (
        <div className="flex flex-col">
            <form action={action}>
                <TextInput name="title" label="曲名" defaultValue={tablature.title} />
                <TextInput name="artist" label="アーティスト名" defaultValue={tablature.artist} />
                <TextInput name="link" label="TAB譜リンク" defaultValue={tablature.link} />
                <input name="createdAt" type="hidden" value={tablature.createdAt.toString()}></input>
                <div className="flex space-x-1">
                    <button name="action" type="submit" value="update">
                        更新
                    </button>
                    <button name="action" type="submit" value="delete">
                        削除
                    </button>
                </div>
            </form>
        </div>
    );
}

"use client";

import { updateTablatureAction } from "@/action/tablature";
import Select, { Option } from "@/component/form/select";
import TextInput from "@/component/form/text-input";
import TrashIcon from "@/component/icon/trash-icon";
import UpdateIcon from "@/component/icon/update-icon";
import type { Tablature } from "@/generated/prisma";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";

type Props = {
    tablature: Tablature;
};

const INSTRUMENTS: Option[] = [
    { key: "instrument-1", label: "エレキギター", value: "エレキギター" },
    { key: "instrument-2", label: "エレキベース", value: "エレキベース" },
];

export default function TablatureForm({ tablature }: Props) {
    const router = useRouter();

    const [result, action, isPending] = useActionState(updateTablatureAction, { status: null, message: "" });

    useEffect(() => {
        if (result.status) {
            alert(result.message);
        }
    }, [result.status]);

    const handleDeleteButtonClick = async () => {
        const res = await fetch(`/api/tablatures/${tablature.id}`, { method: "DELETE" });
        if (res.status == 200) {
            router.back();
        } else {
            alert("TAB譜の削除に失敗しました。しばらくしてからもう一度お試しください。");
        }
    };

    return (
        <div className="flex flex-col">
            <form action={action}>
                <TextInput name="title" label="曲名" defaultValue={tablature.title} />
                <TextInput name="artist" label="アーティスト名" defaultValue={tablature.artist} />
                <TextInput name="link" label="TAB譜リンク" defaultValue={tablature.link} />
                <Select name="instrument" options={INSTRUMENTS} defaultValue={tablature.instrument || ""} />
                <input name="id" type="hidden" value={tablature.id}></input>
                <input name="createdAt" type="hidden" value={tablature.createdAt.toString()}></input>
                <div className="flex justify-between">
                    <button className="btn btn-primary" type="submit">
                        <UpdateIcon />
                        更新
                    </button>
                    <button className="btn btn-error" onClick={handleDeleteButtonClick}>
                        <TrashIcon />
                        削除
                    </button>
                </div>
            </form>
        </div>
    );
}

"use client";

import PlusIcon from "@/components/icon/plus-icon";
import { SITE_TITLE } from "@/constants/site";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const router = useRouter();

    const handleAddTablatureButtonClick = async () => {
        const res = await fetch("/api/tablatures", { method: "POST" });
        if (res.status == 201) {
            const { id } = await res.json();
            router.push(`/tablatures/${id}`);
        } else {
            alert("新規作成に失敗しました。");
        }
    };

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost text-xl">
                    {SITE_TITLE}
                </Link>
            </div>
            <div className="flex-none">
                <button className="btn btn-square btn-ghost" onClick={handleAddTablatureButtonClick}>
                    <PlusIcon />
                </button>
            </div>
        </div>
    );
}

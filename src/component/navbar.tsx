"use client";

import PlusIcon from "@/component/icon/plus-icon";
import SearchIcon from "@/component/icon/search-icon";
import { SITE_TITLE } from "@/constant/site";
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
                <a href="/search" className="btn btn-square btn-ghost">
                    <SearchIcon />
                </a>
                <button className="btn btn-square btn-ghost" onClick={handleAddTablatureButtonClick}>
                    <PlusIcon />
                </button>
            </div>
        </div>
    );
}

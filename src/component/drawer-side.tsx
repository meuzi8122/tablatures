"use client";

import { useRouter } from "next/navigation";

export default function DrawerSide() {
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
        <div className="drawer-side">
            <label htmlFor="drawer" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                <li>
                    <a href="#" onClick={handleAddTablatureButtonClick}>
                        TAB譜を追加
                    </a>
                </li>
                <li>
                    <a>このサイトについて</a>
                </li>
            </ul>
        </div>
    );
}

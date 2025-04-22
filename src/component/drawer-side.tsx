"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function DrawerSide() {
    const { data: session } = useSession();

    const router = useRouter();

    const handleSignInButtonClick = () => {
        signIn();
    };

    const handleSignOutButtonClick = () => {
        signOut();
    };

    const handleTablatureButtonClick = async () => {
        if (!session) {
            alert("TAB譜を投稿するにはログインが必要です。");
            return;
        }

        const res = await fetch("/api/tablature", { method: "POST" });

        if (res.status == 201) {
            router.push(`/tablatures/${(await res.json()).tablature.id}`);
        } else {
            alert("TAB譜の投稿を開始できませんでした。しばらくしてからもう一度お試しください。");
        }
    };

    const handleBookmarkPageButtonClick = () => {
        if (session) {
            router.push("/bookmarks");
        } else {
            alert("ブックマークしたTAB譜を閲覧するにはログインが必要です。");
        }
    };

    return (
        <div className="drawer-side">
            <label htmlFor="drawer" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                <li>
                    {session ? (
                        <button onClick={handleSignOutButtonClick}>ログアウト</button>
                    ) : (
                        <button onClick={handleSignInButtonClick}>ログイン</button>
                    )}
                </li>
                <li>
                    <button onClick={handleTablatureButtonClick}>TAB譜を投稿</button>
                </li>
                <li>
                    <button onClick={handleBookmarkPageButtonClick}>ブックマークしたTAB譜</button>
                </li>
            </ul>
        </div>
    );
}

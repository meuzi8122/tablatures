import { createTablatureAction } from "@/action/tablature";
import { signInAction, signOutAction } from "@/action/user";
import { auth } from "@/auth";

export default async function DrawerSide() {
    const session = await auth();

    return (
        <div className="drawer-side">
            <label htmlFor="drawer" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                {session === null ? (
                    <li>
                        <form action={signInAction}>
                            <button type="submit">ログイン</button>
                        </form>
                    </li>
                ) : (
                    <li>
                        <form action={signOutAction}>
                            <button type="submit">ログアウト</button>
                        </form>
                    </li>
                )}
                <li>
                    <form action={createTablatureAction}>
                        <button name="create" type="submit">
                            TAB譜を投稿
                        </button>
                    </form>
                </li>
                <li>
                    <a href="/bookmarks">ブックマークしたTAB譜</a>
                </li>
                <li>
                    <a>このサイトについて</a>
                </li>
            </ul>
        </div>
    );
}

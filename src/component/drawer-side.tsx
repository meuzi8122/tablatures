import { signInAction, signOutAction } from "@/action/user";
import { auth } from "@/auth";

export default async function DrawerSide() {
    const session = await auth();

    // const router = useRouter();

    const handleAddTablatureButtonClick = async () => {
        // const res = await fetch("/api/tablatures", { method: "POST" });
        // if (res.status == 201) {
        //     const { id } = await res.json();
        //     router.push(`/tablatures/${id}`);
        // } else {
        //     alert("新規作成に失敗しました。");
        // }
    };

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
                    <a href="#">TAB譜を追加</a>
                </li>
                <li>
                    <a>お気に入りのTAB譜</a>
                </li>
                <li>
                    <a>このサイトについて</a>
                </li>
            </ul>
        </div>
    );
}

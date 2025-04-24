import { updateBookmarkAction } from "@/action/bookmark";
import { auth } from "@/auth";
import BookmarkIcon from "@/component/icon/bookmark-icon";
import BookmarkStashIcon from "@/component/icon/bookmark-stash-icon";
import EditIcon from "@/component/icon/edit-icon";
import type { Tablature } from "@/generated/prisma";
import { NeonBookmarkRepository } from "@/repository/bookmark";
import { BookmarkService } from "@/service/bookamrk";
import Image from "next/image";
import Link from "next/link";

type Props = {
    tablature: Tablature;
};

export async function TablatureListItem({ tablature }: Props) {
    const session = await auth();

    /* TODO: ListItemコンポーネントの数だけリクエストが発生 → N+1問題(+1はListでのリクエスト) */
    const bookmark = session
        ? await new BookmarkService(new NeonBookmarkRepository()).getBookmark(session.user.id, tablature.id)
        : null;

    return (
        <li className="list-row">
            <div>
                <Image src="/images/no_image.jpg" className="rounded-box" alt="artwork" width={40} height={40} />
            </div>
            <div>
                <div>
                    <a href={tablature.link || ""} target="_blank">{`${tablature.title} (${tablature.instrument})`}</a>
                </div>
                <a href={`/tablatures?artist=${tablature.artist}`} className="text-xs font-semibold opacity-60">
                    {tablature.artist}
                </a>
            </div>
            {session && session.user.id == tablature.userId ? (
                <Link href={`/tablatures/${tablature.id}`} className="btn btn-square btn-ghost">
                    <EditIcon />
                </Link>
            ) : (
                <form action={updateBookmarkAction}>
                    <input type="hidden" name="id" value={tablature.id} />
                    <button type="submit" className="btn btn-square btn-ghost">
                        {bookmark ? <BookmarkStashIcon /> : <BookmarkIcon />}
                    </button>
                </form>
            )}
        </li>
    );
}

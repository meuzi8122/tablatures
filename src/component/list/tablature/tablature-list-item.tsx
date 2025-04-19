import { auth } from "@/auth";
import BookmarkIcon from "@/component/icon/bookmark-icon";
import EditIcon from "@/component/icon/edit-icon";
import type { Tablature } from "@/generated/prisma";
import Image from "next/image";

type Props = {
    tablature: Tablature;
};

export async function TablatureListItem({ tablature }: Props) {
    const session = await auth();

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
            {session?.user.id == tablature.userId ? (
                <a href={`/tablatures/${tablature.id}`} className="btn btn-square btn-ghost">
                    <EditIcon />
                </a>
            ) : (
                <form>
                    <button className="btn btn-square btn-ghost">
                        <BookmarkIcon />
                    </button>
                </form>
            )}
        </li>
    );
}

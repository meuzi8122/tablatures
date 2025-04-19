"use client";

import BookmarkIcon from "@/component/icon/bookmark-icon";
import type { Tablature } from "@/generated/prisma";
import Image from "next/image";

type Props = {
    tablature: Tablature;
};

export function TablatureListItem({ tablature }: Props) {
    const handleFavoriteButtonClick = () => {
        alert("TAB譜のブックマーク機能は今後実装予定です。");
    };

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
            <button className="btn btn-square btn-ghost" onClick={handleFavoriteButtonClick}>
                <BookmarkIcon />
            </button>
        </li>
    );
}

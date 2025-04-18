import LinkIcon from "@/component/icon/link-icon";
import type { Tablature } from "@/generated/prisma";
import Image from "next/image";

type Props = {
    tablature: Tablature;
};

export function TablatureListItem({ tablature }: Props) {
    return (
        <li className="list-row" key={tablature.id}>
            <div>
                <Image src="/images/no_image.jpg" className="rounded-box" alt="artwork" width={40} height={40} />
            </div>
            <div>
                <div>{tablature.title}</div>
                <a href={`/tablatures?artist=${tablature.artist}`} className="text-xs font-semibold opacity-60">
                    {tablature.artist}
                </a>
            </div>
            <a className="btn btn-square btn-ghost" href={tablature.link || ""} target="_blank">
                <LinkIcon />
            </a>
        </li>
    );
}

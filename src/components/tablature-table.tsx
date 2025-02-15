"use client";

import { Tablature } from "@/types/domain";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

type Props = {
    tablatures: Tablature[];
};

export default function TablatureTable({ tablatures }: Props) {
    const [hasVideo, setHasVideo] = useState<boolean>(false);

    const handleHasVideoChange = (event: ChangeEvent<HTMLInputElement>) => {
        setHasVideo(event.currentTarget.checked);
    };

    return (
        <div className="overflow-x-auto">
            <div className="form-control mb-4">
                <label className="label cursor-pointer">
                    <span className="label-text">演奏動画があるTAB譜のみ表示</span>
                    <input type="checkbox" className="toggle" checked={hasVideo} onChange={handleHasVideoChange} />
                </label>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>楽曲タイトル</th>
                        <th>アーティスト</th>
                        <th>タグ</th>
                    </tr>
                </thead>
                <tbody>
                    {/* TODO: flatMapを使うべき？ */}
                    {(hasVideo ? tablatures.filter((tablature) => tablature.hasVideo) : tablatures).map((tablature) => (
                        <tr key={tablature.id}>
                            <td>
                                <a href={tablature.tablatureLink} target="_blank">
                                    {tablature.title}
                                </a>
                            </td>
                            <td>
                                <Link href={`/tablatures/${tablature.artist.id}`}>{tablature.artist.name}</Link>
                            </td>
                            <td>{tablature.hasVideo && <div className="badge badge-primary">演奏動画あり</div>}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

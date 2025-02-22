"use client";

import type { Tablature } from "@/types/domain";
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
                        <th></th>
                        <th>TAB譜リンク</th>
                        <th>楽器</th>
                        <th>タグ</th>
                    </tr>
                </thead>
                <tbody>
                    {/* TODO: flatMapを使うべき？ */}
                    {(hasVideo ? tablatures.filter((tablature) => tablature.hasVideo) : tablatures).map(
                        (tablature, index) => (
                            <tr key={tablature.id}>
                                <th>{index + 1}</th>
                                <td>
                                    <a href={tablature.link} target="_blank">
                                        リンク
                                    </a>
                                </td>
                                <td>{tablature.instrument}</td>
                                <td>{tablature.hasVideo && <div className="badge badge-primary">演奏動画あり</div>}</td>
                            </tr>
                        ),
                    )}
                </tbody>
            </table>
        </div>
    );
}

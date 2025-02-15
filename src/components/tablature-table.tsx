"use client";

import { Tablature } from "@/types/domain";
import Link from "next/link";
import { useState } from "react";

type Props = {
    tablatures: Tablature[];
};

export default function TablatureTable({ tablatures }: Props) {
    const [instruments, setInstruments] = useState<{ guitar: boolean; bass: boolean }>({ guitar: false, bass: false });

    // const handleInstruments = (event) => {
    //     setInstruments(event.checked);
    // };

    return (
        <div className="overflow-x-auto">
            {/* <input type="checkbox" checked={instruments.guitar}></input>
            <input type="checkbox" checked={instruments.bass}></input> */}
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>タイトル</th>
                        <th>アーティスト</th>
                        <th>楽器</th>
                    </tr>
                </thead>
                <tbody>
                    {tablatures.map((tsblature, index) => (
                        <tr key={tsblature.id}>
                            <th>{index + 1}</th>
                            <td>
                                <a href={tsblature.tablatureLink} target="_blank">
                                    {tsblature.title}
                                </a>
                            </td>
                            <td>
                                <Link href={`/tablatures/${tsblature.artist.id}`}>{tsblature.artist.name}</Link>
                            </td>
                            <td>{tsblature.instrument}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

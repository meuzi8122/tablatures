import { Tablature } from "@/types/domain";
import Link from "next/link";
import { useState } from "react";

type Props = {
    tablatures: Tablature[];
};

export default function TablatureTable({ tablatures }: Props) {
    const [instruments, setInstruments] = useState<{ guitar: boolean; bass: boolean }>({ guitar: false, bass: false });

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
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {tablatures.map((tablature, index) => (
                        <tr key={tablature.id}>
                            <th>{index + 1}</th>
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

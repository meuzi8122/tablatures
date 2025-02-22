import type { Song } from "@/types/domain";
import Link from "next/link";

type Props = {
    songs: Song[];
};

export default function SongTable({ songs }: Props) {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>楽曲タイトル</th>
                        <th>アーティスト</th>
                        <th>TAB譜</th>
                    </tr>
                </thead>
                <tbody>
                    {songs.map((song) => (
                        <tr key={song.id}>
                            <td>{song.title}</td>
                            <td>
                                <Link href={`/songs/${song.artist.id}`}>{song.artist.name}</Link>
                            </td>
                            <td>
                                <Link href={`/tablatures/${song.id}`}>TAB譜一覧</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

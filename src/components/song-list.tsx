import SongTable from "@/components/song-table";
import type { Song } from "@/types/domain";

type Props = {
    filter: string;
    songs: Song[];
};

export default function SongList({ filter, songs }: Props) {
    return (
        <div className="container mx-auto mt-6">
            <div className="flex flex-col items-center mb-8 space-y-3">
                <h1 className="text-lg font-bold">楽曲一覧</h1>
                <p>{filter}</p>
            </div>
            <SongTable songs={songs} />
        </div>
    );
}

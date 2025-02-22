import { SongClient } from "@/clients/song";
import { TablatureClient } from "@/clients/tablature";
import TablatureTable from "@/components/tablature-table";

type Props = {
    params: Promise<{
        songId: string;
    }>;
};

export default async function TablaturePage({ params }: Props) {
    const { songId } = await params;

    const [song, tablatures] = await Promise.all([SongClient.getSong(songId), TablatureClient.findTablatures(songId)]);

    return (
        <div className="container mx-auto mt-6">
            <div className="flex flex-col items-center mb-8 space-y-3">
                <h1 className="text-lg font-bold">TAB譜一覧</h1>
                <p>{`${song.title} - ${song.artist.name}`}</p>
            </div>
            <TablatureTable tablatures={tablatures} />
        </div>
    );
}

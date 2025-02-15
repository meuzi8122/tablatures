import { ArtistClient } from "@/clients/artist";
import { TablatureClient } from "@/clients/tablature";
import TablatureTable from "@/components/tablature-table";

type Props = {
    params: Promise<{
        artistId: string;
    }>;
};

export default async function ArtistTablaturePage({ params }: Props) {
    const { artistId } = await params;

    const artist = await ArtistClient.getArtist(artistId);
    const tablatures = await TablatureClient.findTablaturesByArtist(artistId);

    return (
        <div className="container mx-auto mt-6">
            <div className="flex flex-col items-center mb-7 space-y-3">
                <h1 className="text-lg font-bold">{artist.name}のTAB譜</h1>
                <p>曲名をクリックするとTAB譜の掲載ページに遷移します</p>
            </div>
            <TablatureTable
                tablatures={tablatures.map((tablature) => ({
                    ...tablature,
                    title: `${tablature.title} (${tablature.instrument})`,
                }))}
            />
        </div>
    );
}

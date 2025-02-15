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
        <div className="container mx-auto mt-4">
            <h1 className="font-bold mb-4">{artist.name}のTAB譜</h1>
            <TablatureTable tablatures={tablatures} />
        </div>
    );
}

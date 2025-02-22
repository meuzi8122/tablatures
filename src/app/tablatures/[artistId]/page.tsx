import { ArtistClient } from "@/clients/artist";
import { TablatureClient } from "@/clients/tablature";
import TablatureList from "@/components/tablature-list";

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
        <TablatureList
            filter={artist.name}
            tablatures={tablatures.map((tablature) => ({
                ...tablature,
                title: `${tablature.title} (${tablature.instrument})`,
            }))}
        />
    );
}

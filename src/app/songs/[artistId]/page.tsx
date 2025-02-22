import { ArtistClient } from "@/clients/artist";
import { SongClient } from "@/clients/song";
import SongList from "@/components/song-list";

type Props = {
    params: Promise<{
        artistId: string;
    }>;
};

export default async function ArtistSongPage({ params }: Props) {
    const { artistId } = await params;

    const [artist, songs] = await Promise.all([
        ArtistClient.getArtist(artistId),
        SongClient.findSongsByArtistId(artistId),
    ]);

    return <SongList filter={artist.name} songs={songs} />;
}

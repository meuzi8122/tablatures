import { ArtistClient } from "@/clients/artist";
import Link from "next/link";
import { Fragment } from "react";

export default async function ArtistPage() {
    const artists = await ArtistClient.findArtists();

    return (
        <div className="container mx-auto">
            <h1 className="text-lg font-bold text-center mt-6 mb-8">アーティスト一覧</h1>
            <div className="flex flex-col">
                {artists.map((artist) => (
                    <Fragment key={artist.id}>
                        <Link href={`/tablatures/${artist.id}`}>{artist.name}</Link>
                        <div className="divider"></div>
                    </Fragment>
                ))}
            </div>
        </div>
    );
}

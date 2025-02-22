import { SongClient } from "@/clients/song";
import SongList from "@/components/song-list";
import { redirect } from "next/navigation";

type Props = {
    searchParams: Promise<{
        keyword: string;
    }>;
};

export default async function SongPage({ searchParams }: Props) {
    const { keyword } = await searchParams;

    if (!keyword) {
        redirect("/");
    }

    const songs = await SongClient.findSongs(keyword);

    return <SongList filter={`タイトルに"${keyword}"を含む楽曲`} songs={songs} />;
}

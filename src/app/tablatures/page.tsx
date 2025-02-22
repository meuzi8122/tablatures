import { TablatureClient } from "@/clients/tablature";
import TablatureList from "@/components/tablature-list";
import { redirect } from "next/navigation";

type Props = {
    searchParams: Promise<{
        keyword: string;
        instrument: string;
    }>;
};

export default async function TablaturePage({ searchParams }: Props) {
    const { keyword, instrument } = await searchParams;

    if (!(keyword && instrument)) {
        redirect("/");
    }

    /* TODO: キャッシュ周り確認 */
    const tablatures = await TablatureClient.findTablaturesByTitle(keyword, instrument);

    return <TablatureList filter={`タイトルに"${keyword}"を含む / ${instrument}`} tablatures={tablatures} />;
}

import { TablatureClient } from "@/clients/tablature";
import TablatureTable from "@/components/tablature-table";

type Props = {
    searchParams: Promise<{
        keyword: string;
        instrument: string;
    }>;
};

export default async function TablaturePage({ searchParams }: Props) {
    const { keyword, instrument } = await searchParams;

    /* TODO: キャッシュ周り確認 */
    const tablatures = await TablatureClient.findTablaturesByTitle(keyword, instrument);

    return (
        <div className="container mx-auto mt-4">
            <h1 className="font-bold mb-4">
                楽曲タイトルに"{keyword}"を含む{instrument}のTAB譜
            </h1>
            <TablatureTable tablatures={tablatures} />
        </div>
    );
}

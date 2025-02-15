import { TablatureClient } from "@/clients/tablature";
import TablatureTable from "@/components/tablature-table";

type Props = {
    searchParams: Promise<{
        keyword: string;
    }>;
};

export default async function TablaturePage({ searchParams }: Props) {
    const { keyword } = await searchParams;

    /* TODO: キャッシュ周り確認 */
    const tablatures = await TablatureClient.findTablatures(keyword);

    return (
        <div className="container mx-auto">
            <p>キーワード: {keyword}の検索結果</p>
            <TablatureTable tablatures={tablatures} />
        </div>
    );
}

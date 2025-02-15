import { TablatureClient } from "@/clients/tablature";
import TablatureTable from "@/components/tablature-table";
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

    return (
        <div className="container mx-auto mt-6">
            <div className="flex flex-col items-center mb-7 space-y-3">
                <h1 className="text-lg font-bold">
                    楽曲タイトルに"{keyword}"を含む / {instrument}のTAB譜
                </h1>
                <p>曲名をクリックするとTAB譜の掲載ページに遷移します</p>
            </div>
            <TablatureTable tablatures={tablatures} />
        </div>
    );
}

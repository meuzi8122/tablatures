import TablatureList from "@/component/list/tablature/tablature-list";
import { NeonTablatureRepository } from "@/repository/tablature";
import { TablatureService } from "@/service/tablature";

type Props = {
    searchParams: Promise<{
        artist?: string;
        page?: number;
    }>;
};

export default async function TablaturePage({ searchParams }: Props) {
    const { artist, page } = await searchParams;

    const { total, tablatures, hasNext } = await new TablatureService(new NeonTablatureRepository()).findTablatures({
        artist,
        page,
    });

    return (
        <div className="container mx-auto mt-7">
            <TablatureList label={`${total}件中N件表示`} tablatures={tablatures} />
        </div>
    );
}

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
    const { artist, page = 1 } = await searchParams;

    const { total, tablatures, start, end, hasNext } = await new TablatureService(
        new NeonTablatureRepository(),
    ).findTablatures({
        artist,
        page,
    });

    const prevPage = page <= 1 ? 1 : page - 1;
    const nextPage = hasNext ? page + 1 : page;

    return (
        <div className="container mx-auto mt-7">
            <TablatureList label={`${total}件中${start}件目~${end}件目を表示`} tablatures={tablatures} />
            <div className="join flex justify-center mt-4">
                <a href={`/tablatures?artist=${artist}&page=${prevPage}`} className="join-item btn">
                    «
                </a>
                <button className="join-item btn">Page {page ? page : 1}</button>
                <a href={`/tablatures?artist=${artist}&page=${nextPage}`} className="join-item btn">
                    »
                </a>
            </div>
        </div>
    );
}

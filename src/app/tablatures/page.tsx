import TablatureList from "@/component/list/tablature/tablature-list";
import { NeonTablatureRepository } from "@/repository/tablature";
import { TablatureService } from "@/service/tablature";

type Props = {
    searchParams: Promise<{
        artist?: string;
    }>;
};

export default async function TablaturePage({ searchParams }: Props) {
    const { artist } = await searchParams;

    const tablatures = await new TablatureService(new NeonTablatureRepository()).findTablatures({ artist });

    return (
        <div className="container mx-auto mt-7">
            <TablatureList tablatures={tablatures} />
        </div>
    );
}

import TablatureList from "@/component/list/tablature/tablature-list";
import { NeonTablatureRepository } from "@/repository/tablature";
import { TablatureService } from "@/service/tablature";

export default async function IndexPage() {
    const { total, tablatures } = await new TablatureService(new NeonTablatureRepository()).findTablatures({});

    return (
        <div className="container mx-auto mt-7">
            <TablatureList label={`${total}件中N件表示`} tablatures={tablatures} />
        </div>
    );
}

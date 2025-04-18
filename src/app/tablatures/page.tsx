import TablatureList from "@/component/list/tablature/tablature-list";
import { NeonTablatureRepository } from "@/repository/tablature";
import { TablatureService } from "@/service/tablature";

export default async function TablaturePage() {
    const tablatures = await new TablatureService(new NeonTablatureRepository()).findTablatures();

    return (
        <div className="container mx-auto mt-7">
            <TablatureList tablatures={tablatures} />
        </div>
    );
}

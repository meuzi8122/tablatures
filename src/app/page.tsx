import { NeonTablatureRepository } from "@/repository/tablature";
import { TablatureService } from "@/service/tablature";

export default async function IndexPage() {
    const tablatureService = new TablatureService(new NeonTablatureRepository());

    const tablatures = await tablatureService.findTablatures();

    return (
        <div>
            {tablatures.map((tablature) => (
                <p>{JSON.stringify(tablature)}</p>
            ))}
        </div>
    );
}

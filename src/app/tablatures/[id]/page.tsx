import TablatureForm from "@/component/form/tablature/tablature-form";
import { NeonTablatureRepository } from "@/repository/tablature";
import { TablatureService } from "@/service/tablature";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function TablatureEditPage({ params }: Props) {
    const tablatureService = new TablatureService(new NeonTablatureRepository());

    const { id } = await params;

    const tablature = await tablatureService.getTablature(Number(id));

    return (
        <div className="container mx-auto">
            <TablatureForm tablature={tablature} />
        </div>
    );
}

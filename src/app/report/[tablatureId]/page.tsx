import { TablatureClient } from "@/clients/tablature";
import ReportForm from "@/components/report-form";

type Props = {
    params: Promise<{ tablatureId: string }>;
};

export default async function ReportPage({ params }: Props) {
    const { tablatureId } = await params;

    const tablature = await TablatureClient.getTablature(tablatureId);

    return (
        <div className="container mx-auto">
            <h1 className="text-lg font-bold text-center mt-6 mb-8">TAB譜を報告</h1>
            <ReportForm tablature={tablature} />
        </div>
    );
}

import ReportForm from "@/components/report-form";

type Props = {
    params: Promise<{ tablatureId: string }>;
};

export default async function ReportPage({ params }: Props) {
    const { tablatureId } = await params;

    return (
        <div className="container mx-auto">
            <h1 className="text-lg font-bold text-center mt-6 mb-8">TAB譜を報告</h1>
            <ReportForm id={tablatureId} />
        </div>
    );
}

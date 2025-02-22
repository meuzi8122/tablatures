import TablatureTable from "@/components/tablature-table";
import { Tablature } from "@/types/domain";

type Props = {
    filter: string;
    tablatures: Tablature[];
};

export default function TablatureList({ filter, tablatures }: Props) {
    return (
        <div className="container mx-auto mt-6">
            <div className="flex flex-col items-center mb-8 space-y-3">
                <h1 className="text-lg font-bold">TAB譜一覧</h1>
                <p>{filter}</p>
            </div>
            <TablatureTable tablatures={tablatures} />
        </div>
    );
}

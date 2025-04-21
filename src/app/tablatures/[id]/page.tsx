import { auth } from "@/auth";
import TablatureForm from "@/component/form/tablature/tablature-form";
import { NeonTablatureRepository } from "@/repository/tablature";
import { TablatureService } from "@/service/tablature";
import { redirect } from "next/navigation";

type Props = {
    params: Promise<{
        id: string; // 数値型を渡しても必ず文字列になる
    }>;
};

export default async function TablatureEditPage({ params }: Props) {
    const session = await auth();
    if (!session) {
        redirect("/");
    }

    const { id } = await params;

    const tablature = await new TablatureService(new NeonTablatureRepository()).getTablature(Number(id));

    return (
        <div className="container mx-auto">
            <TablatureForm tablature={tablature} />
        </div>
    );
}

"use server";

import { NeonTablatureRepository } from "@/repository/tablature";
import { TablatureService } from "@/service/tablature";
import { redirect } from "next/navigation";

export type TablatureActionResult = {
    isSuccess?: boolean;
    message?: string;
};

const tablatureService = new TablatureService(new NeonTablatureRepository());

export async function tablatureAction(_: any, formData: any): Promise<TablatureActionResult> {
    if (formData.get("action") == "update") {
        return updateTablatureAction(formData);
    } else if (formData.get("action") == "delete") {
        return deleteTablatureAction(formData);
    }

    return {};
}

async function updateTablatureAction(formData: any): Promise<TablatureActionResult> {
    let result: TablatureActionResult = { isSuccess: true, message: "TAB譜の更新に成功しました。" };

    /* ストレージにファイルをアップロードした後、アップロード先のurlをtablature.linkに代入 */
    //if (formData.get("tablatureFile")) {}

    try {
        await tablatureService.updateTablature({
            id: formData.get("id"),
            title: formData.get("title"),
            artist: formData.get("artist"),
            instrument: formData.get("instrument"),
            link: formData.get("link"),
            createdAt: new Date(formData.get("createdAt")),
            updatedAt: new Date(),
        });
    } catch (error) {
        console.log(error);
        result = { isSuccess: false, message: "TAB譜の更新に失敗しました。" };
    }

    return result;
}

async function deleteTablatureAction(formData: any): Promise<TablatureActionResult> {
    let result: TablatureActionResult = { isSuccess: true, message: "TAB譜の削除に成功しました。" };

    try {
        await tablatureService.deleteTanblature(formData.get("id"));
    } catch (error) {
        console.log(error);
        result = { isSuccess: false, message: "TAB譜の削除に失敗しました。" };
    }

    return result;
}

export async function createTablatureAction() {
    const tablature = await tablatureService.createTablature();

    redirect(`/tablatures/${tablature.id}`);
}

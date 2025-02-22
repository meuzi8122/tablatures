/* nodemailerはブラウザ側で使用できない（インポートエラーになる）ので、必ずサーバーサイドで呼び出す。 */
"use server";

import { MailClient } from "@/clients/mail";

export async function reportAction(_: any, formData: any): Promise<string> {
    const title = formData.get("title");
    const artist = formData.get("artist");

    try {
        await MailClient.sendMail(formData.get("id"), title, artist, formData.get("content"));
        return `ご報告ありがとうございます。${title} - ${artist}のTAB譜一覧ページに戻ります。`;
    } catch {
        return `報告の送信に失敗しました。${title} - ${artist}のTAB譜一覧ページに戻ります。`;
    }
}

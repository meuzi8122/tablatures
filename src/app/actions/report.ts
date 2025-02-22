/* nodemailerはブラウザ側で使用できない（インポートエラーになる）ので、必ずサーバーサイドで呼び出す。 */
"use server";

import { MailClient } from "@/clients/mail";

export async function reportAction(_: any, formData: any) {
    MailClient.sendMail(formData.get("id"), formData.get("content"));
}

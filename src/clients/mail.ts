import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.GMAIL_ADDRESS,
        pass: process.env.GMAIL_APP_PASSWORD,
    },
});

export class MailClient {
    static async sendMail(tablatureId: string, title: string, artist: string, content: string) {
        await transporter.sendMail({
            to: process.env.GMAIL_ADDRESS,
            subject: `[Tablatures] ${tablatureId}に関する報告を受信しました。`,
            from: "no-reply@example.com",
            html: `
            <h1>${tablatureId}に関する報告を受信しました</h1>
            <p>楽曲タイトル: ${title}</p>
            <p>アーティスト: ${artist}</p>
            <p>報告内容: ${content}</p>
            `,
        });
    }
}

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
    static async sendMail(tablatureId: string, content: string) {
        await transporter.sendMail({
            to: process.env.GMAIL_ADDRESS,
            subject: `${tablatureId}について報告がありました。`,
            from: "no-reply@example.com",
            text: content,
        });
    }
}

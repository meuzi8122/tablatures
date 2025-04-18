import Navbar from "@/component/navbar";
import { SITE_TITLE } from "@/constant/site";
import "@/styles/globals.css";
import type { LayoutProps } from "@/types/layout";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
    title: SITE_TITLE,
    description: "",
};

export default function RootLayout({ children }: LayoutProps) {
    return (
        <html lang="ja">
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}

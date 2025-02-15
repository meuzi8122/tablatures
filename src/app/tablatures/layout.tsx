import Navbar from "@/components/navbar";
import { SITE_TITLE } from "@/constants/site";
import "@/styles/globals.css";
import type { LayoutProps } from "@/types/layout";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
    title: `タブ譜一覧 | ${SITE_TITLE}`,
    description: "",
};

export default function TablaturePageLayout({ children }: LayoutProps) {
    return (
        <html lang="ja">
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}

import Navbar from "@/components/navbar";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/constants/site";
import { font } from "@/fonts/google";
import "@/styles/globals.css";
import type { LayoutProps } from "@/types/layout";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
    title: `掲載アーティスト一覧 | ${SITE_TITLE}`,
    description: SITE_DESCRIPTION,
};

export default function TablaturePageLayout({ children }: LayoutProps) {
    return (
        <html lang="ja">
            <body className={font.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}

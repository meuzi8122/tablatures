import Navbar from "@/component/navbar";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/constant/site";
import "@/style/globals.css";
import type { LayoutProps } from "@/type/layout";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
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

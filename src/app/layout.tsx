import { SITE_TITLE } from "@/constants/site";
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
            <body>{children}</body>
        </html>
    );
}

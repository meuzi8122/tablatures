import DrawerSide from "@/component/drawer-side";
import Navbar from "@/component/navbar";
import { AuthProvider } from "@/component/provider/auth-provider";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/constant/site";
import "@/globals.css";
import type { WrapperProps } from "@/type/props";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
};

export default function RootLayout({ children }: WrapperProps) {
    return (
        <html lang="ja">
            <body>
                <AuthProvider>
                    <div className="drawer drawer-end">
                        <input id="drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            <Navbar />
                            {children}
                        </div>
                        <DrawerSide />
                    </div>
                </AuthProvider>
            </body>
        </html>
    );
}

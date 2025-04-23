import MenuIcon from "@/component/icon/menu-icon";
import { SITE_TITLE } from "@/constant/site";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost text-xl">
                    {SITE_TITLE}
                </Link>
            </div>
            <div className="flex-none">
                <label htmlFor="drawer" className="btn btn-ghost">
                    <MenuIcon />
                </label>
            </div>
        </div>
    );
}

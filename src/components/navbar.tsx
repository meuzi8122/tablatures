import { SITE_TITLE } from "@/constants/site";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="navbar bg-base-100">
            <Link href="/" className="btn btn-ghost text-xl">
                {SITE_TITLE}
            </Link>
        </div>
    );
}

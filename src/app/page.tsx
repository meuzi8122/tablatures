import { SITE_TITLE } from "@/constants/site";
import Form from "next/form";
import Link from "next/link";

export default function IndexPage() {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">{SITE_TITLE}</h1>
                    <p className="py-6">
                        Youtube等で公開されているギター・ベース向けのTAB譜を収集しまとめています。当サイトに掲載される全てのコンテンツの著作権は、各権利所有者に帰属します。
                    </p>
                    <Form action="/songs">
                        <label className="input input-bordered flex items-center gap-2 mb-5">
                            <input name="keyword" type="text" className="grow" placeholder="楽曲名で検索" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                />
                            </svg>
                        </label>
                    </Form>
                    <Link href="/artists" className="link link-primary">
                        掲載アーティスト一覧
                    </Link>
                </div>
            </div>
        </div>
    );
}

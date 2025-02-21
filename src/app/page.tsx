import RadioFormControl from "@/components/radio-form-control";
import TextFormControl from "@/components/text-form-control";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/constants/site";
import Form from "next/form";
import Link from "next/link";

export default function IndexPage() {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">{SITE_TITLE}</h1>
                    <p className="pt-6 pb-8">{SITE_DESCRIPTION}</p>
                    <Link href="/artists" className="link link-primary">
                        掲載アーティスト一覧
                    </Link>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <Form action="/tablatures" className="card-body">
                        <TextFormControl name="keyword" label="楽曲タイトル" placeholder="" />
                        <label className="label">
                            <span className="label-text">楽器で絞り込む</span>
                        </label>
                        <RadioFormControl
                            name="instrument"
                            label="エレキギター"
                            value="エレキギター"
                            defaultChecked={true}
                        />
                        <RadioFormControl
                            name="instrument"
                            label="アコースティックギター"
                            value="アコースティックギター"
                        />
                        <RadioFormControl name="instrument" label="エレキベース" value="エレキベース" />
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">
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
                                TAB譜を検索
                            </button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}

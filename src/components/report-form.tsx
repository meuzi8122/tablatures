"use client";

import { reportAction } from "@/app/actions/report";
import { useActionState } from "react";

type Props = {
    id: string;
};

export default function ReportForm({ id }: Props) {
    const [_, action, isPending] = useActionState(reportAction, null);

    return (
        <form action={action} className="flex flex-col space-y-3">
            {["TAB譜のリンクが切れている", "TAB譜の情報がリンク先の内容と一致しない"].map((content) => (
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">{content}</span>
                        <input type="radio" name="content" className="radio checked:bg-red-500" value={content} />
                    </label>
                </div>
            ))}
            <input name="id" type="hidden" value={id} />
            <div className="flex">
                <button className="btn btn-primary" type="submit">
                    {isPending && <span className="loading loading-spinner"></span>}
                    {!isPending && (
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
                                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                            />
                        </svg>
                    )}
                    送信
                </button>
            </div>
        </form>
    );
}

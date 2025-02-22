"use client";

import { contactAction } from "@/actions/contact";
import { useActionState } from "react";

export default function ContactForm() {
    const [_, action, isPending] = useActionState(contactAction, null);

    return (
        <form action={action}>
            <div className="flex flex-col space-y-4">
                <select name="category" className="select select-bordered w-full max-w-xs">
                    {["TAB譜のリクエスト", "その他"].map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
                <textarea
                    name="content"
                    className="textarea"
                    placeholder="お問い合わせ内容を入力してください"
                ></textarea>
                <div className="flex">
                    <div className="flex-1"></div>
                    <button className="btn flex-none" type="submit">
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
                        送信
                    </button>
                </div>
                {/* {isPending && <span className="loading loading-spinner loading-md"></span>} */}
            </div>
        </form>
    );
}

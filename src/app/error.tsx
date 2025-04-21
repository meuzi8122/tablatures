"use client";

import { useRouter } from "next/navigation";

export default function ErrorPage() {
    const router = useRouter();

    const handleBackButtonClick = () => {
        router.back();
    };

    return (
        <div className="container mx-auto">
            <div className="h-screen w-screen flex flex-col items-center justify-center">
                <p className="mb-4">エラーが発生しました。</p>
                <button className="btn" onClick={handleBackButtonClick}>
                    前のページに戻る
                </button>
            </div>
        </div>
    );
}

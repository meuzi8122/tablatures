import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
    content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    plugins: [
        /* 静的コンポーネントスタイルを適用（TailwindCss標準） */
        plugin(function ({ addComponents }) {
            addComponents({
                ".container": {
                    maxWidth: "90%",
                    "@screen sm": {
                        maxWidth: "600px",
                    },
                    "@screen md": {
                        maxWidth: "700px",
                    },
                    "@screen lg": {
                        maxWidth: "900px",
                    },
                    "@screen xl": {
                        maxWidth: "1200px",
                    },
                },
            });
        }),
    ],
} satisfies Config;

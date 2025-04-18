import TablatureTable from "@/component/tablature-table";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("TAB譜一覧テーブルのテスト", () => {
    test("TAB譜一覧が表示されること", async () => {
        const { getByRole, getAllByRole } = render(
            <TablatureTable
                tablatures={[
                    {
                        id: "test-tablature-1",
                        instrument: "エレキギター",
                        link: "https://example.com/xxxx",
                        hasVideo: false,
                    },
                    {
                        id: "test-tablature-2",
                        instrument: "エレキギター",
                        link: "https://example.com/zzzz",
                        hasVideo: true,
                    },
                ]}
            />,
        );

        const hasVideoCheckeBox = getByRole("checkbox");
        expect(hasVideoCheckeBox).not.toBeChecked();

        const rows = getAllByRole("row");
        expect(rows.length).toBe(3);
        expect(rows[0].querySelector("th")).toHaveTextContent("TAB譜リンク");
        expect(rows[1].querySelector("td")).toHaveTextContent("リンク");
        expect(rows[1].querySelector("a")).toHaveAttribute("href", "https://example.com/xxxx");
        expect(rows[2].querySelector("td")).toHaveTextContent("リンク");
        expect(rows[2].querySelector("a")).toHaveAttribute("href", "https://example.com/zzzz");

        await userEvent.click(hasVideoCheckeBox);
        expect(hasVideoCheckeBox).toBeChecked();

        const rows_2 = getAllByRole("row");
        expect(rows_2.length).toBe(2);
        expect(rows_2[0].querySelector("th")).toHaveTextContent("TAB譜リンク");
        expect(rows_2[1].querySelector("td")).toHaveTextContent("リンク");
        expect(rows_2[1].querySelector("a")).toHaveAttribute("href", "https://example.com/zzzz");
    });
});

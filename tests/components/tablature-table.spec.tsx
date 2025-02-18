import TablatureTable from "@/components/tablature-table";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("TAB譜一覧テーブルのテスト", () => {
    test("TAB譜一覧が表示されること", async () => {
        const { getByRole, getAllByRole } = render(
            <TablatureTable
                tablatures={[
                    {
                        id: "test-tablature-1",
                        title: "TEST_SONG_1",
                        artist: { id: "test-artist-1", name: "TEST_ARTIST_1" },
                        instrument: "エレキギター",
                        tablatureLink: "https://example.com/xxxx",
                        hasVideo: false,
                    },
                    {
                        id: "test-tablature-2",
                        title: "TEST_SONG_2",
                        artist: { id: "test-artist-2", name: "TEST_ARTIST_2" },
                        instrument: "エレキギター",
                        tablatureLink: "https://example.com/zzzz",
                        hasVideo: true,
                    },
                ]}
            />,
        );

        const hasVideoCheckeBox = getByRole("checkbox");
        expect(hasVideoCheckeBox).not.toBeChecked();

        const rows = getAllByRole("row");
        expect(rows.length).toBe(3);
        expect(rows[0].querySelector("th")).toHaveTextContent("楽曲タイトル");
        expect(rows[1].querySelector("td")).toHaveTextContent("TEST_SONG_1");
        expect(rows[2].querySelector("td")).toHaveTextContent("TEST_SONG_2");

        await userEvent.click(hasVideoCheckeBox);
        expect(hasVideoCheckeBox).toBeChecked();

        const rows_2 = getAllByRole("row");
        expect(rows_2.length).toBe(2);
        expect(rows_2[0].querySelector("th")).toHaveTextContent("楽曲タイトル");
        expect(rows_2[1].querySelector("td")).toHaveTextContent("TEST_SONG_2");
    });
});

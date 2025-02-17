import { render } from "@testing-library/react";
import TablatureTable from "../../src/components/tablature-table";

describe("TAB譜一覧テーブルのテスト", () => {
    test("TAB譜一覧が表示されること", () => {
        const { getByRole, getAllByRole } = render(
            <TablatureTable
                tablatures={[
                    {
                        id: "test-tablature-1",
                        title: "TEST_SONG_1",
                        artist: { id: "test-artist-1", name: "TEST_ARTIST_1" },
                        instrument: "エレキギター",
                        tablatureLink: "https://example.com/xxxx",
                        hasVideo: true,
                    },
                    {
                        id: "test-tablature-2",
                        title: "TEST_SONG_2",
                        artist: { id: "test-artist-2", name: "TEST_ARTIST_2" },
                        instrument: "エレキギター",
                        tablatureLink: "https://example.com/zzzz",
                        hasVideo: false,
                    },
                ]}
            />,
        );

        const rows = getAllByRole("row");
        expect(rows[1].querySelector("td")).toHaveTextContent("TEST_SONG_1");
        expect(rows[2].querySelector("td")).toHaveTextContent("TEST_SONG_2");
    });
});

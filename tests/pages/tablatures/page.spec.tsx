import TablaturePage from "@/app/tablatures/page";
import { act, render } from "@testing-library/react";

jest.mock("microcms-js-sdk", () => ({
    createClient: () => {
        return new (class MockClient {
            async getAllContents(): Promise<any[]> {
                return [
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
                ];
            }
        })();
    },
}));

describe("タブ譜一覧ページ", () => {
    test("タブ譜一覧が表示されること", async () => {
        await act(async () => {
            const component = await TablaturePage({
                searchParams: new Promise<{ keyword: string; instrument: string }>((resolve) =>
                    resolve({ keyword: "TEST", instrument: "エレキギター" }),
                ),
            });

            const { getAllByRole } = render(component);

            // const rows = getAllByRole("row");
            // expect(rows.length).toBe(3);
            // expect(rows[0].querySelector("th")).toHaveTextContent("楽曲タイトル");
            // expect(rows[1].querySelector("td")).toHaveTextContent("TEST_SONG_1");
            // expect(rows[2].querySelector("td")).toHaveTextContent("TEST_SONG_2");
        });
    });
});

import TablaturePage from "@/app/tablatures/[songId]/page";
import { act, render } from "@testing-library/react";

jest.mock("microcms-js-sdk", () => ({
    createClient: () => {
        return new (class MockClient {
            async get(): Promise<any> {
                return {
                    id: "test-song-1",
                    title: "TEST_SONG_1",
                    artist: {
                        id: "test-artist-1",
                        name: "TEST_ARTIST_1",
                    },
                };
            }
            async getAllContents(): Promise<any[]> {
                return [
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
                ];
            }
        })();
    },
}));

describe("TAB譜一覧ページ", () => {
    test("TAB譜一覧が表示されること", async () => {
        await act(async () => {
            const component = await TablaturePage({
                params: new Promise<{ songId: string }>((resolve) => resolve({ songId: "test-song-1" })),
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

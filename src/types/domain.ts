export type Artist = {
    id: string;
    name: string;
};

export type Tablature = {
    id: string;
    title: string;
    instrument: string;
    artist: Artist;
    tablatureLink: string;
};

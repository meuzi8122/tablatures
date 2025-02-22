export type Artist = {
    id: string;
    name: string;
};

export type Song = {
    id: string;
    title: string;
    artist: Artist;
};

export type Tablature = {
    id: string;
    instrument: string;
    link: string;
    hasVideo?: boolean;
    song?: Song;
};

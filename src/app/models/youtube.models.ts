export interface YoutubeResponse {
    kind: string;
    etag: string;
    nextPageToken: string;
    pageInfo: PageInfo;
    items: Item[];
}

export interface Item {
    kind: Kind;
    etag: string;
    id: string;
    snippet: Video;
}

export enum Kind {
    YoutubePlaylist = "youtube#playlist",
}

export interface Video {
    publishedAt: Date;
    channelId: ChannelID;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: ChannelTitle;
    localized: Localized;
}

export enum ChannelID {
    UCiBWOVBljEjcsLUjwI274Xw = "UCiBwOVBljEjcsLUjwI274Xw",
}

export enum ChannelTitle {
    TheTopComics = "The Top Comics",
}

export interface Localized {
    title: string;
    description: string;
}

export interface Thumbnails {
    default: Default;
    medium: Default;
    high: Default;
    standard: Default;
    maxres: Default;
}

export interface Default {
    url: string;
    width: number;
    height: number;
}

export interface PageInfo {
    totalResults: number;
    resultsPerPage: number;
}

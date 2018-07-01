import { RouterProps } from "next/router";

export interface Content {
    _id: string,
    src: string,
    seasonId: string,
    epNo: string,
    epName: { th: string, en: string },
    name: { th: string, en: string },
    season: ISeason,
}

export interface ISeason {
    _id: string,
    no: number,
    name: string,
    programId: number,
    program: {
        _id: string;
        name: {
            th: string;
            en: string;
        }
    },
}

export interface ISeasonsProps {
    seasons: {
        loading: boolean,
        error: any,
        seasons: Array<ISeason>,
    };
}

export interface IContentProps {
    loading: boolean;
    error: any;
    lists: Array<{ id: number, name: { th: string, en: string } }>;
    contents: Array<Content>;
}

export interface IRouteProps {
    url?: {
        query: {
            ep: string,
            season: string,
        },
    },
    router: RouterProps,
}
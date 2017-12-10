export interface ISeasonsProps {
    seasons: {
        loading: boolean,
        error: any,
        seasons: Array<{
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
        }>,
    };
}

export interface IContentProps {
    contents: {
        loading: boolean,
        error: any,
        lists: Array<{ id: number, name: { th: string, en: string } }>,
        contents: Array<{
            _id: string,
            src: string,
            seasonId: string,
            epNo: string,
            epName: { th: string, en: string },
            name: { th: string, en: string },
            season: { _id: string, name: string, no: number, programId: string },
        }>,
    };
}

export interface IRouteProps {
    url: {
        query: {
            ep: string,
            season: string,
        },
    };
}

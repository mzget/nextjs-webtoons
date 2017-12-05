import * as React from "react";
import { graphql, compose } from "react-apollo";

import { Content_QUERY } from "../queries/ProgramList";

export interface IContent {
    url: {
        query: { ep: string },
    };
    data: {
        loading: boolean,
        error: any,
        lists: Array<{ id: number, name: { th: string, en: string } }>,
        content: {
            id: string,
            src: string,
            seasonId: string,
            epNo: string,
            epName: { th: string, en: string },
            name: { th: string, en: string },
            season: { id: string, name: string, no: string, programId: number },
        },
    };
}

class PlayContent extends React.Component<IContent, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        const { loading, content } = this.props.data;
        const { query } = this.props.url;

        console.log(loading, content);
        return (
            <div>
                {
                    (loading) ?
                        <p>{loading}</p>
                        :
                        <div>
                            <p>{`ซีซั่น ${content.season.no} ${content.season.name}`}</p>
                            <p>{`ตอนที่ ${content.epNo} ${content.epName.th}`}</p>
                            <video width={"100%"} controls src={content.src} >
                                Sorry, your browser doesn't support embedded videos.
                                </video>
                        </div>
                }
            </div>
        );
    }
}

const PlayContentWithData = compose(
    graphql(Content_QUERY, {
        // options: { variables: { seasonId: "1" } },
        options: ({ url }: any) => ({ variables: { episode: url.query.ep } }),
    }),
)(PlayContent);

export default PlayContentWithData;

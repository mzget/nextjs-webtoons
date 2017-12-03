import * as React from "react";
import { graphql, compose } from "react-apollo";

import { List_QUERY, Content_QUERY } from "../queries/ProgramList";

export interface IContent {
    data: {
        loading: boolean,
        error: any,
        lists: Array<{ id: number, name: { th: string, en: string } }>,
        contents: Array<{
            id: string,
            src: string,
            seasonId: string,
            epNo: string,
            epName: { th: string, en: string },
            name: { th: string, en: string },
            season: { id: string, name: string, no: string, programId: number },
        }>,
    };
}

class PlayContent extends React.Component<IContent, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        const { loading, contents } = this.props.data;

        console.log(this.props.data);

        return (
            <div>
                {
                    (loading) ?
                        <p>{loading}</p>
                        :
                        <div>
                            <p>{`${contents[0].name.th}`}</p>
                            <p>{`ภาค ${contents[0].season.no} ${contents[0].season.name}`}</p>
                            <p>{`ตอนที่ ${contents[0].epNo} ${contents[0].epName.th}`}</p>
                            <video width={"100%"} controls src={contents[0].src} >
                                Sorry, your browser doesn't support embedded videos.
                                </video>
                        </div>
                }
            </div>
        );
    }
}

const PlayContentWithData = compose(
    graphql(List_QUERY),
    graphql(Content_QUERY, {
        options: { variables: { seasonId: "1" } },
    }),
)(PlayContent);

export default PlayContentWithData;

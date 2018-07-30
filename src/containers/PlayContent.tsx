import * as React from "react";
import { graphql, compose } from "react-apollo";
import { withRouter } from "next/router";

import { ContentQUERY } from "../queries/ProgramList";
import { IContent, IRouteProps } from "../utils/structs";

import SeasonHeader from "../components/SeasonHeader";

export interface IContent extends IRouteProps {
    data: {
        loading: boolean,
        error: any,
        lists: Array<{ id: number, name: { th: string, en: string } }>,
        content: IContent,
    };
}

function PlayContent(props: IContent) {
    const { loading, error, content } = props.data;
    const { ep, season } = props.router.query as any;

    if (loading) {
        return <p>{loading}</p>;
    }
    if (error) {
        return <p>{error.message}</p>;
    }

    return (
        <div>
            <div style={{ margin: 8 }}>
                <SeasonHeader programId={"5a26828bf37263b3e436a2d7"} id={parseInt(season)} />
                <p style={{ marginLeft: 12 }}>{`ตอนที่ ${content.epNo} ${content.epName.th}`}</p>
                <React.Fragment>
                    <video height={"480"} controls src={content.src}>
                        Sorry, your browser doesn't support embedded videos.
                            </video>
                </React.Fragment>
            </div>
        </div>
    );
}

const PlayContentWithData = compose(
    graphql(ContentQUERY, {
        options: (props: IContent) => ({ variables: { episode: (props.router.query as any).ep } }),
    }),
)(PlayContent);

export default withRouter(PlayContentWithData);

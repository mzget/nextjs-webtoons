import * as React from "react";
import { graphql, compose } from "react-apollo";

import { Content_QUERY } from "../queries/ProgramList";
import { Content, IRouteProps } from "../utils/structs";

export interface IContent extends IRouteProps {
    data: {
        loading: boolean,
        error: any,
        lists: Array<{ id: number, name: { th: string, en: string } }>,
        content: Content,
    };
}

function PlayContent(props: IContent) {
    const { loading, error, content } = props.data;
    console.info("PlayContent", props);
    if (loading) {
        return <p>{loading}</p>
    }
    if (error) {
        return <p>{error.message}</p>
    }

    return (
        <div>
            {
                (loading) ?
                    <p>{loading}</p>
                    :
                    <div style={{ margin: 8 }}>
                        <p style={{ marginLeft: 12 }}>
                            <strong>{`ซีซั่น ${content.season.no} ${content.season.name}`}</strong>
                        </p>
                        <p style={{ marginLeft: 12 }}>{`ตอนที่ ${content.epNo} ${content.epName.th}`}</p>
                        <React.Fragment>
                            <video height={"480"} controls src={content.src}>
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </React.Fragment>
                    </div>
            }
        </div>
    );
}


const PlayContentWithData = compose(
    graphql(Content_QUERY, {
        options: (props: IContent) => ({ variables: { episode: (props.router.query as any).ep } }),
    }),
)(PlayContent);

export default PlayContentWithData;

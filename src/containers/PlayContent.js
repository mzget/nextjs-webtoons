import * as React from "react";
import { withRouter } from "next/router";
import { graphql, compose } from "react-apollo";
import { Content_QUERY } from "../queries/ProgramList";
function PlayContent(props) {
    const { loading, error, content } = props.data;
    console.info("PlayContent", props);
    if (loading) {
        return React.createElement("p", null, loading);
    }
    if (error) {
        return React.createElement("p", null, error.message);
    }
    return (React.createElement("div", null, (loading) ?
        React.createElement("p", null, loading)
        :
            React.createElement("div", { style: { margin: 8 } },
                React.createElement("p", { style: { marginLeft: 12 } },
                    React.createElement("strong", null, `ซีซั่น ${content.season.no} ${content.season.name}`)),
                React.createElement("p", { style: { marginLeft: 12 } }, `ตอนที่ ${content.epNo} ${content.epName.th}`),
                React.createElement(React.Fragment, null,
                    React.createElement("video", { height: "480", controls: true, src: content.src }, "Sorry, your browser doesn't support embedded videos.")))));
}
const PlayContentWithData = compose(graphql(Content_QUERY, {
    options: (props) => ({ variables: { episode: props.router.query.ep } }),
}))(PlayContent);
export default withRouter(PlayContentWithData);

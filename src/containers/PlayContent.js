import * as React from "react";
import { graphql, compose } from "react-apollo";
import { Content_QUERY } from "../queries/ProgramList";
function PlayContent(props) {
    const { loading, content } = props.data;
    return (React.createElement("div", null, (loading) ?
        React.createElement("p", null, loading)
        :
            React.createElement("div", null,
                React.createElement("p", { style: { marginLeft: 12 } },
                    React.createElement("strong", null, `ซีซั่น ${content.season.no} ${content.season.name}`)),
                React.createElement("p", { style: { marginLeft: 12 } }, `ตอนที่ ${content.epNo} ${content.epName.th}`),
                React.createElement("span", null,
                    React.createElement("video", { width: "100%", controls: true, src: content.src }, "Sorry, your browser doesn't support embedded videos.")))));
}
const PlayContentWithData = compose(graphql(Content_QUERY, {
    options: (props) => ({ variables: { episode: props.router.query.ep } }),
}))(PlayContent);
export default PlayContentWithData;

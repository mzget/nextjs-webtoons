"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_apollo_1 = require("react-apollo");
const ProgramList_1 = require("../queries/ProgramList");
class PlayContent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { loading, content } = this.props.data;
        const { query } = this.props.url;
        console.log(loading, content);
        return (React.createElement("div", null, (loading) ?
            React.createElement("p", null, loading)
            :
                React.createElement("div", null,
                    React.createElement("p", null, `ซีซั่น ${content.season.no} ${content.season.name}`),
                    React.createElement("p", null, `ตอนที่ ${content.epNo} ${content.epName.th}`),
                    React.createElement("video", { width: "100%", controls: true, src: content.src }, "Sorry, your browser doesn't support embedded videos."))));
    }
}
const PlayContentWithData = react_apollo_1.compose(react_apollo_1.graphql(ProgramList_1.Content_QUERY, {
    // options: { variables: { seasonId: "1" } },
    options: ({ url }) => ({ variables: { episode: url.query.ep } }),
}))(PlayContent);
exports.default = PlayContentWithData;

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
        const { loading, contents } = this.props.data;
        console.log(this.props.data);
        return (React.createElement("div", null, (loading) ?
            React.createElement("p", null, loading)
            :
                React.createElement("div", null,
                    React.createElement("p", null, `ภาค ${contents[0].season.name}`),
                    React.createElement("p", null, `ตอนที่ ${contents[0].epNo} ${contents[0].epName.th}`),
                    React.createElement("video", { width: "100%", controls: true, src: contents[0].src }, "Sorry, your browser doesn't support embedded videos."))));
    }
}
const PlayContentWithData = react_apollo_1.compose(react_apollo_1.graphql(ProgramList_1.List_QUERY), react_apollo_1.graphql(ProgramList_1.Content_QUERY, {
    options: { variables: { seasonId: "1" } },
}))(PlayContent);
exports.default = PlayContentWithData;

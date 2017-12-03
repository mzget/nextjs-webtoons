"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_apollo_1 = require("react-apollo");
const ProgramList_1 = require("../queries/ProgramList");
class Programs extends React.Component {
    render() {
        const { data } = this.props;
        return (React.createElement("div", null,
            React.createElement("p", null, `รายชื่อตอน ${data.lists[0].name.th} ${data.lists[0].name.en.toUpperCase()}`)));
    }
}
const ProgramsWithData = react_apollo_1.compose(react_apollo_1.graphql(ProgramList_1.List_QUERY))(Programs);
exports.default = ProgramsWithData;

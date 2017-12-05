"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_apollo_1 = require("react-apollo");
const ProgramList_1 = require("../queries/ProgramList");
const SeasonsList_1 = require("../components/SeasonsList");
class Programs extends React.Component {
    render() {
        const { programs } = this.props;
        const program = programs.lists[0];
        return (React.createElement("div", null, (programs.loading) ? React.createElement("p", null, `Loading...`) :
            React.createElement("div", null,
                React.createElement("p", { style: { marginLeft: 10 } },
                    React.createElement("strong", null, `รายชื่อตอน ${program.name.th} ${program.name.en.toUpperCase()}`)),
                React.createElement(SeasonsList_1.default, null))));
    }
}
const ProgramsWithData = react_apollo_1.compose(react_apollo_1.graphql(ProgramList_1.List_QUERY, { name: "programs" }))(Programs);
exports.default = ProgramsWithData;

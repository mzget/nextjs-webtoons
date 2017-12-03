"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_apollo_1 = require("react-apollo");
const List_1 = require("material-ui/List");
const ProgramList_1 = require("../queries/ProgramList");
class SeasonsList extends React.Component {
    render() {
        const { seasons, loading, error } = this.props.data;
        console.log(this.props);
        return (React.createElement(List_1.List, null, seasons.map((season) => React.createElement(List_1.ListItem, { key: season.no, primaryText: `${season.program.name.th} ซีซั่น ${season.no} ${season.name}`, initiallyOpen: false, primaryTogglesNestedList: true, nestedItems: [
                React.createElement(List_1.ListItem, { key: 1, primaryText: "Starred" }),
                React.createElement(List_1.ListItem, { key: 2, primaryText: "Sent Mail", disabled: true }),
                React.createElement(List_1.ListItem, { key: 3, primaryText: "Inbox", onNestedListToggle: this.handleNestedListToggle }),
            ] }))));
    }
}
const SeasonsListWithData = react_apollo_1.compose(react_apollo_1.graphql(ProgramList_1.Seasons_List, {
    options: { variables: { programId: 1 } },
}))(SeasonsList);
exports.default = SeasonsListWithData;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_apollo_1 = require("react-apollo");
const List_1 = require("material-ui/List");
const ProgramList_1 = require("../queries/ProgramList");
function getLists({ contents }, seasonId) {
    const seasons = contents.contents.filter((content) => content.seasonId === seasonId);
    return seasons.map((content, id) => React.createElement(List_1.ListItem, { key: id, primaryText: content.epName.th }));
}
class SeasonsList extends React.Component {
    render() {
        const { contents } = this.props.contents;
        const { seasons } = this.props.seasons;
        console.log(this.props);
        return (React.createElement(List_1.List, null, !!seasons && seasons.map((season) => React.createElement(List_1.ListItem, { key: season.no, primaryText: `${season.program.name.th} ซีซั่น ${season.no} ${season.name}`, initiallyOpen: false, primaryTogglesNestedList: true, nestedItems: getLists(this.props, season.id) }))));
    }
}
const SeasonsListWithData = react_apollo_1.compose(react_apollo_1.graphql(ProgramList_1.Seasons_List, {
    name: "seasons",
    options: { variables: { programId: 1 } },
}), react_apollo_1.graphql(ProgramList_1.Content_QUERY, {
    name: "contents",
}))(SeasonsList);
exports.default = SeasonsListWithData;

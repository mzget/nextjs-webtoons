"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_apollo_1 = require("react-apollo");
const router_1 = require("next/router");
const List_1 = require("material-ui/List");
const ProgramList_1 = require("../queries/ProgramList");
function getLists({ contents }, seasonId, onClickItem) {
    const seasons = contents.contents.filter((content) => content.seasonId === seasonId);
    return seasons.map((content, id) => React.createElement(List_1.ListItem, { key: id, primaryText: `ตอนที่ ${content.epNo}`, secondaryText: content.epName.th, onClick: () => onClickItem(content.id) }));
}
class SeasonsList extends React.Component {
    componentWillMount() {
        this.onClickItem = this.onClickItem.bind(this);
    }
    onClickItem(data) {
        console.log(data);
        router_1.default.push({
            pathname: "/play",
            query: { ep: `${data}` },
        });
    }
    render() {
        const { contents } = this.props.contents;
        const { seasons } = this.props.seasons;
        console.log(this.props);
        return (React.createElement(List_1.List, null, !!seasons && seasons.map((season) => React.createElement(List_1.ListItem, { key: season.no, primaryText: `${season.program.name.th} ซีซั่น ${season.no} ${season.name}`, initiallyOpen: false, primaryTogglesNestedList: true, nestedItems: getLists(this.props, season.id, this.onClickItem) }))));
    }
}
const SeasonsListWithData = react_apollo_1.compose(react_apollo_1.graphql(ProgramList_1.Seasons_List, {
    name: "seasons",
    options: { variables: { programId: 1 } },
}), react_apollo_1.graphql(ProgramList_1.Content_QUERY, {
    name: "contents",
}))(SeasonsList);
exports.default = SeasonsListWithData;

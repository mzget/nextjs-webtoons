"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_apollo_1 = require("react-apollo");
const router_1 = require("next/router");
const List_1 = require("material-ui/List");
const ProgramList_1 = require("../queries/ProgramList");
function getLists({ contents }, seasonNo, onClickItem) {
    const seasons = contents.contents.filter((content) => content.season.no === seasonNo);
    return seasons.map((content, id) => React.createElement(List_1.ListItem, { key: id, primaryText: `ตอนที่ ${content.epNo}`, secondaryText: content.epName.th, onClick: () => onClickItem(content.epNo) }));
}
class SeasonsList extends React.Component {
    componentWillMount() {
        this.onClickItem = this.onClickItem.bind(this);
    }
    onClickItem(data) {
        router_1.default.push({
            pathname: "/seasons",
            query: { season: `${data}` },
        });
    }
    render() {
        const { contents } = this.props.contents;
        const { seasons } = this.props.seasons;
        return (React.createElement(List_1.List, null, (this.props.contents.loading || this.props.seasons.loading) ? React.createElement("p", null, `Loading...`) :
            !!seasons && seasons.map((season) => React.createElement(List_1.ListItem, { key: season.no, primaryText: `${season.program.name.th} ซีซั่น ${season.no} ${season.name}`, initiallyOpen: false, primaryTogglesNestedList: false, onClick: () => this.onClickItem(season.no) }))));
    }
}
const SeasonsListWithData = react_apollo_1.compose(react_apollo_1.graphql(ProgramList_1.Seasons_List, {
    name: "seasons",
    options: { variables: { programId: "5a26828bf37263b3e436a2d7" } },
}), react_apollo_1.graphql(ProgramList_1.Contents_QUERY, {
    name: "contents",
    options: ({}) => ({ variables: { programId: "5a26828bf37263b3e436a2d7" } }),
}))(SeasonsList);
exports.default = SeasonsListWithData;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const List_1 = require("material-ui/List");
const react_apollo_1 = require("react-apollo");
const ProgramList_1 = require("../queries/ProgramList");
function getLists({ contents }, seasonNo, onClickItem) {
    const seasons = contents.contents.filter((content) => content.season.no === parseInt(seasonNo));
    return seasons.map((content, id) => React.createElement(List_1.ListItem, { key: id, primaryText: `ตอนที่ ${content.epNo}`, secondaryText: content.epName.th, onClick: () => onClickItem(content.epNo) }));
}
const ContentList = (props) => {
    const { season } = props.url.query;
    return (React.createElement(List_1.List, null, getLists(props, season, props.onClickContent)));
};
const ContentListWithData = react_apollo_1.compose(react_apollo_1.graphql(ProgramList_1.Contents_QUERY, {
    name: "contents",
    options: ({}) => ({ variables: { programId: "5a26828bf37263b3e436a2d7" } }),
}))(ContentList);
exports.default = ContentListWithData;

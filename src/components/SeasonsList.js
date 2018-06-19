import * as React from "react";
import { compose, graphql } from "react-apollo";
import { withRouter } from "next/router";
import { List, ListItem } from "material-ui/List";
import { Seasons_List } from "../queries/ProgramList";
function getLists({ contents }, seasonNo, onClickItem) {
    const seasons = contents.contents.filter((content) => content.season.no === seasonNo);
    return seasons.map((content, id) => React.createElement(ListItem, { key: id, primaryText: `ตอนที่ ${content.epNo}`, secondaryText: content.epName.th, onClick: () => onClickItem(content.epNo) }));
}
function onClickItem(router, data) {
    router.push({
        pathname: "/chapters",
        query: { season: `${data}` },
    });
}
const SeasonsList = (props) => {
    // const { contents } = props.contents;
    const { seasons } = props.seasons;
    const router = props.router;
    console.info("seasons", props.seasons);
    return (React.createElement(List, null, (props.seasons.loading) ? React.createElement("p", null, `Loading...`) :
        !!seasons && seasons.map((season) => React.createElement(ListItem, { key: season.no, primaryText: `${season.program.name.th} ซีซั่น ${season.no} ${season.name}`, initiallyOpen: false, primaryTogglesNestedList: false, onClick: () => onClickItem(router, season.no) }))));
};
const SeasonsListWithData = compose(graphql(Seasons_List, {
    name: "seasons",
    options: { variables: { programId: "5a26828bf37263b3e436a2d7" } },
}))(withRouter(SeasonsList));
export default SeasonsListWithData;

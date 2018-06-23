import * as React from "react";
import { compose, graphql } from "react-apollo";
import { withRouter } from "next/router";
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Seasons_List } from "../queries/ProgramList";
function getLists({ contents }, seasonNo, onClickItem) {
    const seasons = contents.contents.filter((content) => content.season.no === seasonNo);
    return seasons.map((content, id) => React.createElement(ListItem, { key: id, primaryText: `ตอนที่ ${content.epNo}`, secondaryText: content.epName.th, onClick: () => onClickItem(content.epNo) }));
}
const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});
function onClickItem(router, data) {
    router.push({
        pathname: "/chapters",
        query: { season: `${data}` },
    });
}
const SeasonsList = (props) => {
    const { classes } = props;
    // const { contents } = props.contents;
    const { seasons } = props.seasons;
    const router = props.router;
    console.info("seasons", props.seasons);
    return (React.createElement("div", { className: classes.root },
        React.createElement(List, { component: "nav" }, (props.seasons.loading) ? React.createElement("p", null, `Loading...`) :
            !!seasons && seasons.map((season) => React.createElement(ListItem, { key: season.no, button: true, divider: true, onClick: () => onClickItem(router, season.no) },
                React.createElement(ListItemText, { primary: `${season.program.name.th} ซีซั่น ${season.no} ${season.name}` }))))));
};
const SeasonsListUI = withStyles(styles)(SeasonsList);
const SeasonsListWithData = compose(graphql(Seasons_List, {
    name: "seasons",
    options: { variables: { programId: "5a26828bf37263b3e436a2d7" } },
}))(withRouter(SeasonsListUI));
export default SeasonsListWithData;

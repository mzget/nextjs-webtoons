"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_apollo_1 = require("react-apollo");
const router_1 = require("next/router");
const styles_1 = require("@material-ui/core/styles");
const List_1 = require("@material-ui/core/List");
const ListItem_1 = require("@material-ui/core/ListItem");
const ListItemText_1 = require("@material-ui/core/ListItemText");
const ProgramList_1 = require("../queries/ProgramList");
const styles = theme => ({});
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
    return (<div className={classes.root}>
            <List_1.default component="nav">
                {(props.seasons.loading) ? <p>{`Loading...`}</p> :
        !!seasons && seasons.map((season) => <ListItem_1.default key={season.no} button divider onClick={() => onClickItem(router, season.no)}>
                                <ListItemText_1.default primary={`${season.program.name.th} ซีซั่น ${season.no} ${season.name}`}/>
                            </ListItem_1.default>)}
            </List_1.default>
        </div>);
};
const SeasonsListUI = styles_1.withStyles(styles)(router_1.withRouter(SeasonsList));
const SeasonsListWithData = react_apollo_1.compose(react_apollo_1.graphql(ProgramList_1.Seasons_List, {
    name: "seasons",
    options: { variables: { programId: "5a26828bf37263b3e436a2d7" } },
}))(SeasonsListUI);
exports.default = SeasonsListWithData;

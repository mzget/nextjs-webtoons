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
    return seasons.map((content, id) => <ListItem key={id} primaryText={`ตอนที่ ${content.epNo}`} secondaryText={content.epName.th} onClick={() => onClickItem(content.epNo)}/>);
}
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
            <List component="nav">
                {(props.seasons.loading) ? <p>{`Loading...`}</p> :
        !!seasons && seasons.map((season) => <ListItem key={season.no} button divider onClick={() => onClickItem(router, season.no)}>
                                <ListItemText primary={`${season.program.name.th} ซีซั่น ${season.no} ${season.name}`}/>
                            </ListItem>)}
            </List>
        </div>);
};
const SeasonsListUI = withStyles(styles)(SeasonsList);
const SeasonsListWithData = compose(graphql(Seasons_List, {
    name: "seasons",
    options: { variables: { programId: "5a26828bf37263b3e436a2d7" } },
}))(withRouter(SeasonsListUI));
export default SeasonsListWithData;

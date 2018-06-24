import * as React from "react";
import { compose, graphql } from "react-apollo";
import { withRouter, RouterProps } from "next/router";

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { Seasons_List } from "../queries/ProgramList";

interface ISeasonsProps {
    seasons: {
        loading: boolean,
        error: any,
        seasons: Array<{
            _id: string,
            no: number,
            name: string,
            programId: number,
            program: {
                _id: string;
                name: {
                    th: string;
                    en: string;
                }
            },
        }>,
    };
    contents: {
        loading: boolean,
        error: any,
        lists: Array<{ id: number, name: { th: string, en: string } }>,
        contents: Array<{
            _id: string,
            src: string,
            seasonId: string,
            epNo: string,
            epName: { th: string, en: string },
            name: { th: string, en: string },
            season: { _id: string, name: string, no: number, programId: string },
        }>,
    };
}

const styles = theme => ({});

function onClickItem(router: RouterProps, data: any) {
    router.push({
        pathname: "/chapters",
        query: { season: `${data}` },
    });
}

const SeasonsList = (props) => {
    const { classes } = props;
    // const { contents } = props.contents;
    const { seasons } = props.seasons;
    const router = props.router as RouterProps;

    console.info("seasons", props.seasons);

    return (
        <div className={classes.root}>
            <List component="nav">
                {
                    (props.seasons.loading) ? <p>{`Loading...`}</p> :
                        !!seasons && seasons.map((season) =>
                            <ListItem
                                key={season.no}
                                button
                                divider
                                onClick={() => onClickItem(router, season.no)}
                            >
                                <ListItemText primary={`${season.program.name.th} ซีซั่น ${season.no} ${season.name}`} />
                            </ListItem>,
                        )
                }
            </List>
        </div>
    );
}
const SeasonsListUI = withStyles(styles)(withRouter(SeasonsList));
const SeasonsListWithData = compose(
    graphql(Seasons_List, {
        name: "seasons",
        options: { variables: { programId: "5a26828bf37263b3e436a2d7" } },
    }),
)(SeasonsListUI);

export default SeasonsListWithData;

import * as React from 'react';
import { compose, graphql, Query } from "react-apollo";
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import { Contents_QUERY, Season_Query } from "../queries/ProgramList";
import { Content, IRouteProps, ISeason } from "../utils/structs";

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        flex: 1,
        padding: 16,
    },
});

interface ISeasonPageProps extends IRouteProps {
    onClickContent: (ep: string) => void;
    classes: any;
}


const SeasonQuery = ({ classes }, { programId, id }) => {
    return (
        <Query query={Season_Query} variables={{ programId, id }}>
            {({ loading, error, data }) => {
                if (loading) return null;
                if (error) {
                    return `Error!: ${error.message}`;
                }

                const season = data.season as ISeason;
                return (
                    <span className={classes.title}>
                        <Typography variant="title" color="inherit" >
                            {`${season.program.name.th} ซีซั่น ${season.no} ${season.name}`}
                        </Typography>
                    </span>
                );
            }}
        </Query>
    )
};

const ContentQuery = (props, { programId, seasonNo }) => {
    return (
        <Query query={Contents_QUERY} variables={{ programId, seasonNo }}>
            {
                ({ loading, error, data }) => {
                    if (loading) return null;
                    if (error) {
                        return `Error!: ${error.message}`;
                    }

                    const contents = data.contents as Array<Content>
                    return (
                        <List component="nav">
                            {
                                contents.map((content, id) =>
                                    <ListItem
                                        key={id}
                                        divider
                                        button
                                        onClick={() => props.onClickContent(content.epNo)}
                                    >
                                        <ListItemText primary={`ตอนที่ ${content.epNo}`} secondary={content.epName.th} />
                                    </ListItem>,
                                )
                            }
                        </List>
                    );
                }}
        </Query>
    );
}

const ContentList = (props: ISeasonPageProps) => {
    const { season } = props.router.query as any;

    return (
        <div>
            {
                SeasonQuery(props, { programId: "5a26828bf37263b3e436a2d7", id: parseInt(season) })
            }
            {
                ContentQuery(props, { programId: "5a26828bf37263b3e436a2d7", seasonNo: parseInt(season) })
            }
        </div>
    );
};

export default withStyles(styles)(ContentList);
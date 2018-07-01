import * as React from 'react';
import { compose, graphql, Query } from "react-apollo";
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import { Contents_QUERY, Season_Query } from "../queries/ProgramList";
import { IContentProps, IRouteProps, ISeason } from "../utils/structs";

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

interface ISeasonPageProps extends IContentProps, IRouteProps {
    onClickContent: (ep: string) => void;
}


const SeasonQuery = ({ programId, id }, classes) => {
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

const ContentList = (props: ISeasonPageProps) => {
    console.info("ContentList", props);
    const { season } = props.router.query as any;
    const { classes } = props;

    if (props.contents.loading) {
        return <p>Loading...</p>
    }
    const { contents } = props.contents;
    const seasons = contents.filter((content) =>
        content.season.no === parseInt(season));

    return (
        <div>
            {
                SeasonQuery({ programId: "5a26828bf37263b3e436a2d7", id: parseInt(season) }, classes)
            }
            <List component="nav">
                {
                    seasons.map((content, id) =>
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
        </div>
    );
};

const ContentListUI = withStyles(styles)(ContentList);
const ContentListWithData = compose(
    graphql(Contents_QUERY, {
        name: "contents",
        options: ({ }) => ({ variables: { programId: "5a26828bf37263b3e436a2d7" } }),
    }),
)(ContentListUI);

export default ContentListWithData;
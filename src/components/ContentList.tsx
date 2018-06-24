import * as React from 'react';
import { compose, graphql } from "react-apollo";
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { Contents_QUERY } from "../queries/ProgramList";
import { IContentProps, IRouteProps } from "../utils/structs";

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});

interface ISeasonPageProps extends IContentProps, IRouteProps {
    onClickContent: (ep: string) => void;
}

const ContentList = (props: ISeasonPageProps) => {
    console.info("ContentList", props);
    const { season } = props.router.query as any;

    if (props.contents.loading) {
        return <p>Loading...</p>
    }
    const { contents } = props.contents;
    const seasons = contents.filter((content) =>
        content.season.no === parseInt(season));

    return (
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
import * as React from 'react';
import { compose, graphql } from "react-apollo";
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Contents_QUERY } from "../queries/ProgramList";
const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});
const ContentList = (props) => {
    console.info("ContentList", props);
    const { season } = props.router.query;
    if (props.contents.loading) {
        return React.createElement("p", null, "Loading...");
    }
    const { contents } = props.contents;
    const seasons = contents.filter((content) => content.season.no === parseInt(season));
    return (React.createElement(List, null, seasons.map((content, id) => React.createElement(ListItem, { key: id, divider: true, button: true, onClick: () => props.onClickContent(content.epNo) },
        React.createElement(ListItemText, { primary: `ตอนที่ ${content.epNo}`, secondary: content.epName.th })))));
};
const ContentListUI = withStyles(styles)(ContentList);
const ContentListWithData = compose(graphql(Contents_QUERY, {
    name: "contents",
    options: ({}) => ({ variables: { programId: "5a26828bf37263b3e436a2d7" } }),
}))(ContentListUI);
export default ContentListWithData;

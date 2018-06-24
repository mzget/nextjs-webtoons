"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_apollo_1 = require("react-apollo");
const styles_1 = require("@material-ui/core/styles");
const List_1 = require("@material-ui/core/List");
const ListItem_1 = require("@material-ui/core/ListItem");
const ListItemText_1 = require("@material-ui/core/ListItemText");
const ProgramList_1 = require("../queries/ProgramList");
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
        return <p>Loading...</p>;
    }
    const { contents } = props.contents;
    const seasons = contents.filter((content) => content.season.no === parseInt(season));
    return (<List_1.default component="nav">
            {seasons.map((content, id) => <ListItem_1.default key={id} divider button onClick={() => props.onClickContent(content.epNo)}>
                        <ListItemText_1.default primary={`ตอนที่ ${content.epNo}`} secondary={content.epName.th}/>
                    </ListItem_1.default>)}
        </List_1.default>);
};
const ContentListUI = styles_1.withStyles(styles)(ContentList);
const ContentListWithData = react_apollo_1.compose(react_apollo_1.graphql(ProgramList_1.Contents_QUERY, {
    name: "contents",
    options: ({}) => ({ variables: { programId: "5a26828bf37263b3e436a2d7" } }),
}))(ContentListUI);
exports.default = ContentListWithData;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_apollo_1 = require("react-apollo");
const List_1 = require("@material-ui/core/List");
const ListItem_1 = require("@material-ui/core/ListItem");
const ListItemText_1 = require("@material-ui/core/ListItemText");
const ProgramList_1 = require("../queries/ProgramList");
const SeasonHeader_1 = require("./SeasonHeader");
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
const ContentQuery = (props, { programId, seasonNo }) => {
    return (<react_apollo_1.Query query={ProgramList_1.Contents_QUERY} variables={{ programId, seasonNo }}>
            {({ loading, error, data }) => {
        if (loading)
            return null;
        if (error) {
            return `Error!: ${error.message}`;
        }
        const contents = data.contents;
        return (<List_1.default component="nav">
                            {contents.map((content, id) => <ListItem_1.default key={id} divider button onClick={() => props.onClickContent(seasonNo, content.epNo)}>
                                        <ListItemText_1.default primary={`ตอนที่ ${content.epNo}`} secondary={content.epName.th}/>
                                    </ListItem_1.default>)}
                        </List_1.default>);
    }}
        </react_apollo_1.Query>);
};
const ContentList = (props) => {
    const { season } = props.router.query;
    return (<div>
            <SeasonHeader_1.default programId={"5a26828bf37263b3e436a2d7"} id={parseInt(season)}/>
            {ContentQuery(props, { programId: "5a26828bf37263b3e436a2d7", seasonNo: parseInt(season) })}
        </div>);
};
exports.default = ContentList;

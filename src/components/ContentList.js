import * as React from 'react';
import { List, ListItem } from "material-ui/List";
import { compose, graphql } from "react-apollo";
import { Contents_QUERY } from "../queries/ProgramList";
const ContentList = (props) => {
    console.info("ContentList", props);
    const { season } = props.router.query;
    if (props.contents.loading) {
        return React.createElement("p", null, "Loading...");
    }
    const { contents } = props.contents;
    const seasons = contents.filter((content) => content.season.no === parseInt(season));
    return (React.createElement(List, null, seasons.map((content, id) => React.createElement(ListItem, { key: id, primaryText: `ตอนที่ ${content.epNo}`, secondaryText: content.epName.th, onClick: () => props.onClickContent(content.epNo) }))));
};
const ContentListWithData = compose(graphql(Contents_QUERY, {
    name: "contents",
    options: ({}) => ({ variables: { programId: "5a26828bf37263b3e436a2d7" } }),
}))(ContentList);
export default ContentListWithData;

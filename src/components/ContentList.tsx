import * as React from 'react';
import { List, ListItem } from "material-ui/List";
import { compose, graphql } from "react-apollo";

import { Contents_QUERY } from "../queries/ProgramList";
import { IContentProps, IRouteProps } from "../structs/Structs";


interface ISeasonPageProps extends IContentProps, IRouteProps {
    onClickContent: (ep: string) => void;
}

function getLists({ contents }: ISeasonPageProps, seasonNo: string, onClickItem: (ep: string) => void) {
    const seasons = contents.contents.filter((content) =>
        content.season.no === parseInt(seasonNo));

    return seasons.map((content, id) =>
        <ListItem
            key={id}
            primaryText={`ตอนที่ ${content.epNo}`}
            secondaryText={content.epName.th}
            onClick={() => onClickItem(content.epNo)}
        />,
    );
}

const ContentList = (props: ISeasonPageProps) => {
    const { season } = props.url.query;
    return (
        <List>
            {
                getLists(props, season, props.onClickContent)
            }
        </List>
    );
};

const ContentListWithData = compose(
    graphql(Contents_QUERY, {
        name: "contents",
        options: ({ }) => ({ variables: { programId: "5a26828bf37263b3e436a2d7" } }),
    }),
)(ContentList);

export default ContentListWithData;
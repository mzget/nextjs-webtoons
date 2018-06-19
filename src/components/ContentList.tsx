import * as React from 'react';
import { List, ListItem } from "material-ui/List";
import { compose, graphql } from "react-apollo";

import { Contents_QUERY } from "../queries/ProgramList";
import { IContentProps, IRouteProps } from "../utils/structs";


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
        <List>
            {
                seasons.map((content, id) =>
                    <ListItem
                        key={id}
                        primaryText={`ตอนที่ ${content.epNo}`}
                        secondaryText={content.epName.th}
                        onClick={() => props.onClickContent(content.epNo)}
                    />,
                )
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
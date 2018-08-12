import * as React from "react";
import { Query } from "react-apollo";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { ContentsQUERY } from "../queries/ProgramList";
import { IContent, IRouteProps } from "../utils/structs";

import SeasonHeader from "./SeasonHeader";

const styles = (theme) => ({
    root: {
        width: "100%",
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        flex: 1,
        padding: 16,
    },
});

interface ISeasonPageProps extends IRouteProps {
    onClickContent: (season: string, ep: string) => void;
}

const ContentQuery = (props: ISeasonPageProps, { programId, seasonNo }) => {
    return (
        <Query query={ContentsQUERY} ssr={false} variables={{ programId, seasonNo }}>
            {
                ({ loading, error, data }) => {
                    if (loading) { return null; }
                    if (error) {
                        return `Error!: ${error.message}`;
                    }
                    console.log("ContentList", data);
                    const contents = data.contents as IContent[];

                    return (
                        <List component="nav">
                            {
                                contents.map((content, id) =>
                                    <ListItem
                                        key={id}
                                        divider
                                        button
                                        onClick={() => props.onClickContent(seasonNo, content.epNo)}
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
};

const ContentList = (props: ISeasonPageProps) => {
    const { season } = props.router.query as any;

    return (
        <div>
            <SeasonHeader programId={"5a26828bf37263b3e436a2d7"} id={parseInt(season)} />
            {
                ContentQuery(props, { programId: "5a26828bf37263b3e436a2d7", seasonNo: parseInt(season) })
            }
        </div>
    );
};

export default ContentList;

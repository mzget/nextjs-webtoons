import * as React from "react";
import { compose, graphql } from "react-apollo";
import Router from "next/router";

import { List, ListItem } from "material-ui/List";
import Subheader from "material-ui/Subheader";

import { Seasons_List, Contents_QUERY } from "../queries/ProgramList";

function getLists({ contents }: ISeasonsProps, seasonId: string, onClickItem: (data: any) => void): JSX.Element[] {
    const seasons = contents.contents.filter((content) => content.seasonId === seasonId);
    return seasons.map((content, id) =>
        <ListItem
            key={id}
            primaryText={`ตอนที่ ${content.epNo}`}
            secondaryText={content.epName.th}
            onClick={() => onClickItem(content.epNo)}
        />,
    );
}

interface ISeasonsProps {
    seasons: {
        loading: boolean,
        error: any,
        seasons: Array<{
            id: string,
            no: number,
            name: string,
            programId: number,
            program: {
                id: number;
                name: {
                    th: string;
                    en: string;
                }
            },
        }>,
    };
    contents: {
        loading: boolean,
        error: any,
        lists: Array<{ id: number, name: { th: string, en: string } }>,
        contents: Array<{
            id: string,
            src: string,
            seasonId: string,
            epNo: string,
            epName: { th: string, en: string },
            name: { th: string, en: string },
            season: { id: string, name: string, no: string, programId: number },
        }>,
    };
}

class SeasonsList extends React.Component<ISeasonsProps, any> {
    componentWillMount() {
        this.onClickItem = this.onClickItem.bind(this);
    }

    onClickItem(data: any) {
        console.log(data);
        Router.push({
            pathname: "/play",
            query: { ep: `${data}` },
        });
    }

    render() {
        const { contents } = this.props.contents;
        const { seasons } = this.props.seasons;

        console.log(this.props);

        return (
            <List>
                {
                    !!seasons && seasons.map((season) =>
                        <ListItem
                            key={season.no}
                            primaryText={`${season.program.name.th} ซีซั่น ${season.no} ${season.name}`}
                            initiallyOpen={false}
                            primaryTogglesNestedList={true}
                            nestedItems={getLists(this.props, season.id, this.onClickItem)}
                        />,
                    )
                }
            </List>
        );
    }
}

const SeasonsListWithData = compose(
    graphql(Seasons_List, {
        name: "seasons",
        options: { variables: { programId: 1 } },
    }),
    graphql(Contents_QUERY, {
        name: "contents",
    }),
)(SeasonsList);

export default SeasonsListWithData;

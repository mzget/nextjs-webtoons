import * as React from "react";
import { compose, graphql } from "react-apollo";
import { withRouter, RouterProps } from "next/router";

import { List, ListItem } from "material-ui/List";
import Subheader from "material-ui/Subheader";

import { Seasons_List } from "../queries/ProgramList";

interface ISeasonsProps {
    seasons: {
        loading: boolean,
        error: any,
        seasons: Array<{
            _id: string,
            no: number,
            name: string,
            programId: number,
            program: {
                _id: string;
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
            _id: string,
            src: string,
            seasonId: string,
            epNo: string,
            epName: { th: string, en: string },
            name: { th: string, en: string },
            season: { _id: string, name: string, no: number, programId: string },
        }>,
    };
}

function getLists({ contents }: ISeasonsProps, seasonNo: number, onClickItem: (data: any) => void): JSX.Element[] {
    const seasons = contents.contents.filter((content) => content.season.no === seasonNo);

    return seasons.map((content, id) =>
        <ListItem
            key={id}
            primaryText={`ตอนที่ ${content.epNo}`}
            secondaryText={content.epName.th}
            onClick={() => onClickItem(content.epNo)}
        />,
    );
}

function onClickItem(router: RouterProps, data: any) {
    router.push({
        pathname: "/chapters",
        query: { season: `${data}` },
    });
}

const SeasonsList = (props) => {
    // const { contents } = props.contents;
    const { seasons } = props.seasons;
    const router = props.router as RouterProps;

    console.info("seasons", props.seasons);

    return (
        <List>
            {
                (props.seasons.loading) ? <p>{`Loading...`}</p> :
                    !!seasons && seasons.map((season) =>
                        <ListItem
                            key={season.no}
                            primaryText={`${season.program.name.th} ซีซั่น ${season.no} ${season.name}`}
                            initiallyOpen={false}
                            primaryTogglesNestedList={false}
                            onClick={() => onClickItem(router, season.no)}
                        />,
                    )
            }
        </List>
    );
}

const SeasonsListWithData = compose(
    graphql(Seasons_List, {
        name: "seasons",
        options: { variables: { programId: "5a26828bf37263b3e436a2d7" } },
    }),
)(withRouter(SeasonsList));

export default SeasonsListWithData;

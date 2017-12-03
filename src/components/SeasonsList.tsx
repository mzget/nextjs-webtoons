import * as React from "react";
import { compose, graphql } from "react-apollo";

import { List, ListItem } from "material-ui/List";
import Subheader from "material-ui/Subheader";

import { Seasons_List } from "../queries/ProgramList";

interface ISeasonsProps {
    data: {
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
}

class SeasonsList extends React.Component<ISeasonsProps, any> {
    render() {
        const { seasons, loading, error } = this.props.data;

        console.log(this.props);

        return (
            <List>
                {
                    seasons.map((season) =>
                        <ListItem
                            key={season.no}
                            primaryText={`${season.program.name.th} ซีซั่น ${season.no} ${season.name}`}
                            initiallyOpen={false}
                            primaryTogglesNestedList={true}
                            nestedItems={[
                                <ListItem
                                    key={1}
                                    primaryText="Starred"
                                />,
                                <ListItem
                                    key={2}
                                    primaryText="Sent Mail"
                                    disabled={true}
                                />,
                                <ListItem
                                    key={3}
                                    primaryText="Inbox"
                                    onNestedListToggle={this.handleNestedListToggle}
                                />,
                            ]}
                        />,
                    )
                }
            </List>
        );
    }
}

const SeasonsListWithData = compose(
    graphql(Seasons_List, {
        options: { variables: { programId: 1 } },
    }),
)(SeasonsList);

export default SeasonsListWithData;

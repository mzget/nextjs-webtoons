import * as React from "react";
import { compose, graphql } from "react-apollo";

import { List_QUERY } from "../queries/ProgramList";

import SeasonsList from "../components/SeasonsList";

interface IProgramsProps {
    programs: {
        loading: boolean,
        error: any,
        lists: Array<{ _id: string, name: { th: string, en: string } }>,
    };
}
class Programs extends React.Component<IProgramsProps, any> {
    render() {
        const { programs } = this.props;
        const program = programs.lists[0];

        return (
            <div>
                {
                    (programs.loading) ? <p>{`Loading...`}</p> :
                        <div>
                            <p style={{ marginLeft: 10 }}>
                                <strong>{`รายชื่อตอน ${program.name.th} ${program.name.en.toUpperCase()}`}</strong>
                            </p>
                            <SeasonsList />
                        </div>
                }
            </div>
        );
    }
}

const ProgramsWithData = compose(
    graphql(List_QUERY, { name: "programs" }),
)(Programs);

export default ProgramsWithData;

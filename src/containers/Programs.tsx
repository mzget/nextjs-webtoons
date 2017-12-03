import * as React from "react";
import { compose, graphql } from "react-apollo";

import { List_QUERY } from "../queries/ProgramList";

interface IProgramsProps {
    data: {
        loading: boolean,
        error: any,
        lists: Array<{ id: number, name: { th: string, en: string } }>,
    };
}
class Programs extends React.Component<IProgramsProps, any> {
    render() {
        const { data } = this.props;

        return (
            <div>
                <p>{`รายชื่อตอน ${data.lists[0].name.th} ${data.lists[0].name.en.toUpperCase()}`}</p>
            </div>
        );
    }
}

const ProgramsWithData = compose(
    graphql(List_QUERY),
)(Programs);

export default ProgramsWithData;

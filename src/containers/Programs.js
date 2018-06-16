import * as React from "react";
import { compose, graphql } from "react-apollo";
import { getScreen, SMALL } from "../utils/responsiveHelper";
import { List_QUERY } from "../queries/ProgramList";
import SeasonsList from "../components/SeasonsList";
class Programs extends React.Component {
    render() {
        const { programs } = this.props;
        const program = programs.lists[0];
        const programDiv = (getScreen().appWidth <= SMALL) ? "100%" : `${SMALL}`;
        return (React.createElement("div", { id: "program", style: { overflowX: "hidden", width: `${programDiv}`, overflowY: "auto" } }, (programs.loading) ?
            React.createElement("p", null, `Loading...`) :
            React.createElement("div", null,
                React.createElement("p", { style: { marginLeft: 10 } },
                    React.createElement("strong", null, `รายชื่อตอน ${program.name.th} ${program.name.en.toUpperCase()}`)),
                React.createElement(SeasonsList, null))));
    }
}
const ProgramsWithData = compose(graphql(List_QUERY, { name: "programs" }))(Programs);
export default ProgramsWithData;

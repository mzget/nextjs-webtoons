"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_apollo_1 = require("react-apollo");
const Typography_1 = require("@material-ui/core/Typography");
const styles_1 = require("@material-ui/core/styles");
const responsiveHelper_1 = require("../utils/responsiveHelper");
const ProgramList_1 = require("../queries/ProgramList");
const SeasonsList_1 = require("../components/SeasonsList");
const programDiv = (responsiveHelper_1.getScreen().appWidth <= responsiveHelper_1.XSMALL) ? "100%" : `${responsiveHelper_1.XSMALL}px`;
const styles = {
    root: {
        overFlowX: "hidden",
        width: `${programDiv}`,
        overFlowY: "auto",
    },
    title: {
        flex: 1,
        padding: 16,
    },
    seasonList: {
        flex: 1,
    },
};
class Programs extends React.Component {
    render() {
        const { programs, classes } = this.props;
        if (programs.loading) {
            return <p>{`Loading...`}</p>;
        }
        const program = programs.lists[0];
        return (<div id="program" className={classes.root}>
                <div className={classes.title}>
                    <Typography_1.default variant="title" color="inherit">
                        {`รายชื่อตอน ${program.name.th} ${program.name.en.toUpperCase()}`}
                    </Typography_1.default>
                </div>
                <div className={classes.seasonList}>
                    <SeasonsList_1.default />
                </div>
            </div>);
    }
}
const ProgramsUI = styles_1.withStyles(styles)(Programs);
exports.default = react_apollo_1.compose(react_apollo_1.graphql(ProgramList_1.List_QUERY, { name: "programs" }))(ProgramsUI);

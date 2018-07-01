"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_apollo_1 = require("react-apollo");
const styles_1 = require("@material-ui/core/styles");
const Typography_1 = require("@material-ui/core/Typography");
const ProgramList_1 = require("../queries/ProgramList");
const styles = theme => ({
    title: {
        flex: 1,
        padding: 16,
    },
});
const SeasonHeader = ({ programId, id, classes }) => {
    return (<react_apollo_1.Query query={ProgramList_1.Season_Query} variables={{ programId, id }}>
            {({ loading, error, data }) => {
        if (loading)
            return null;
        if (error) {
            return `Error!: ${error.message}`;
        }
        const season = data.season;
        return (<span className={classes.title}>
                        <Typography_1.default variant="title" color="inherit">
                            {`${season.program.name.th} ซีซั่น ${season.no}`}
                        </Typography_1.default>
                    </span>);
    }}
        </react_apollo_1.Query>);
};
exports.default = styles_1.withStyles(styles, { withTheme: true })(SeasonHeader);

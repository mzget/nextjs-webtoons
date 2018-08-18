import * as React from "react";
import { Query } from "react-apollo";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { SeasonQuery } from "../gqls/ProgramList";
import { ISeason } from "../utils/structs";

const styles = (theme) => ({
    title: {
        flex: 1,
        padding: 16,
    },
});

const SeasonHeader = ({ programId, id, classes }) => {
    return (
        <Query query={SeasonQuery} ssr={false} variables={{ programId, id }}>
            {({ loading, error, data }) => {
                if (loading) { return null; }
                if (error) {
                    return `Error!: ${error.message}`;
                }

                const season = data.season as ISeason;
                return (
                    <span className={classes.title}>
                        <Typography variant="title" color="inherit" >
                            {`${season.program.name.th} ซีซั่น ${season.no}`}
                        </Typography>
                    </span>
                );
            }}
        </Query>
    );
};
export default withStyles(styles, { withTheme: true })(SeasonHeader);

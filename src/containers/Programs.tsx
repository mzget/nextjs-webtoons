import * as React from "react";
import { compose, graphql } from "react-apollo";
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import { getScreen, XSMALL } from "../utils/responsiveHelper";
import { List_QUERY } from "../queries/ProgramList";

import SeasonsList from "../components/SeasonsList";

interface IProgramsProps {
    data: {
        loading: boolean,
        error: any,
        lists: Array<{ _id: string, name: { th: string, en: string } }>,
    };
    classes: any,
}


const programDiv = (getScreen().appWidth <= XSMALL) ? "100%" : `${XSMALL}px`;
const styles = {
    root: {
        width: `${programDiv}`,
    },
    title: {
        flex: 1,
        padding: 16,
    },
};

class Programs extends React.Component<IProgramsProps, any> {
    render() {
        const { data, classes } = this.props;

        if (data.loading) {
            return <p>{`Loading...`}</p>
        }
        const program = data.lists[0];

        return (
            <div id="program" className={classes.root} >
                <Typography variant="title" color="inherit" className={classes.title}>
                    {`รายชื่อตอน ${program.name.th} ${program.name.en.toUpperCase()}`}
                </Typography>
                <SeasonsList />
            </div>
        );
    }
}

const ProgramsUI = withStyles(styles)(Programs);
export default compose(
    graphql(List_QUERY),
)(ProgramsUI);

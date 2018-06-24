import * as React from "react";
import { compose, graphql } from "react-apollo";
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import { getScreen, XSMALL } from "../utils/responsiveHelper";
import { List_QUERY } from "../queries/ProgramList";

import SeasonsList from "../components/SeasonsList";

interface IProgramsProps {
    programs: {
        loading: boolean,
        error: any,
        lists: Array<{ _id: string, name: { th: string, en: string } }>,
    };
    classes: any,
}

const styles = (props) => {
    return {
        root: {
            overflowX: "hidden",
            width: `${props.width}`,
            overflowY: "auto",
        },
        title: {
            flex: 1,
            padding: 16,
        },
        seasonList: {
            flex: 1,
        },
    }
};

class Programs extends React.Component<IProgramsProps, any> {
    render() {
        const { programs, classes } = this.props;
        if (programs.loading) {
            return <p>{`Loading...`}</p>
        }
        const program = programs.lists[0];

        return (
            <div id="program" className={classes.root} >
                <div className={classes.title}>
                    <Typography variant="title" color="inherit" >
                        {`รายชื่อตอน ${program.name.th} ${program.name.en.toUpperCase()}`}
                    </Typography>
                </div>
                <div className={classes.seasonList}>
                    <SeasonsList />
                </div>
            </div>
        );
    }
}

const programDiv = (getScreen().appWidth <= XSMALL) ? "100%" : `${XSMALL}px`;
const ProgramsUI = withStyles(styles({ width: programDiv }))(Programs);
export default compose(
    graphql(List_QUERY, { name: "programs" }),
)(ProgramsUI);

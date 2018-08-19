import * as React from "react";
import { Mutation } from "react-apollo";
import TextField from "@material-ui/core/TextField";
import { withStyles, StyleRulesCallback } from "@material-ui/core/styles";
import { grey, common } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import Flexbox from "flexbox-react";

import { getScreen, SMALL, XSMALL } from "../utils/responsiveHelper";
import { ProgramsSelectComp } from "./ProgramsSelectComp";
import { SeasonsComp } from "./SeasonSelectComp";
import { WithStore } from "../contextStore/withStore";
import { UPDATE_CONTENT } from "../gqls/mutateData";

const contentDiv = (getScreen().appWidth <= XSMALL) ? "100%" : `${XSMALL}px`;
const styles = (theme) => ({
    container: {
        display: "flex",
        flexWrap: "wrap",
        margin: 16,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
    contentBox: {
        width: `${contentDiv}`,
        backgroundColor: common.white,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    button: {
        margin: theme.spacing.unit,
    },
});

interface IAddContentProps {
    epNo: number;
    epName: { th: string };
    src: string;
    name: { th: string, en: string };
    seasonId: string;
    programId: string;
}
class AddContent extends React.Component<{ selectProgram, updateState, classes }, IAddContentProps> {
    constructor(props) {
        super(props);

        this.state = {
            epNo: 0,
            epName: {
                th: "",
            },
            src: "",
            name: { th: "", en: "" },
            programId: "",
            seasonId: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit = (fx) => () => {
        fx(({ variables: { fields: this.state } }));

        this.setState({ epName: { th: "" }, src: "" });
    }
    handleChange = (name) => (event) => {
        if (name === "epName") {
            this.setState({ epName: { th: event.target.value } }, () => console.info(this.state));
        } else {
            // @ts-ignore
            this.setState({ [name]: event.target.value });
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.selectProgram !== this.props.selectProgram) {
            this.setState({
                name: {
                    th: nextProps.selectProgram.name.th,
                    en: nextProps.selectProgram.name.en,
                },
            });
            return false;
        }

        return true;
    }

    render() {
        const { classes } = this.props;

        return (
            <div id="AddContent" className={classes.contentBox}>
                <Flexbox flexDirection={"column"} alignItems="center">
                    <form className={classes.container} noValidate autoComplete="off">
                        <ProgramsSelectComp {...this.props}
                            value={this.state.programId}
                            handleChange={this.handleChange} />
                        <SeasonsComp
                            classes={classes}
                            programId={this.state.programId}
                            value={this.state.seasonId}
                            handleChange={this.handleChange} />
                        <TextField
                            id="Program-Name"
                            label="TH-Program-Name"
                            value={this.state.name.th}
                            className={classes.textField}
                            margin="normal"
                            disabled
                        />
                        <TextField
                            id="Program-Name"
                            label="EN-Program-Name"
                            value={this.state.name.en}
                            className={classes.textField}
                            margin="normal"
                            disabled
                        />
                        <TextField
                            id="EP-No"
                            label="EP-No"
                            value={this.state.epNo}
                            className={classes.textField}
                            type="number"
                            margin="normal"
                            onChange={this.handleChange("epNo")}
                        />
                        <TextField
                            id="EP-Name"
                            label="EP-Name"
                            helperText="Thai EP-name"
                            margin="normal"
                            fullWidth
                            value={this.state.epName.th}
                            onChange={this.handleChange("epName")}
                        />
                        <TextField
                            id="full-width"
                            label="Src"
                            placeholder="Video src"
                            helperText="Video src"
                            fullWidth
                            margin="normal"
                            value={this.state.src}
                            onChange={this.handleChange("src")}
                        />
                    </form>
                    <Mutation mutation={UPDATE_CONTENT} >
                        {(content, { loading, error }) => {
                            if (error) { console.warn(error); }
                            return (
                                <>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        className={classes.button}
                                        onClick={this.onSubmit(content)}>
                                        Summit
                                    </Button>
                                    {loading && <p>Loading...</p>}
                                    {error && <p>{error.message}</p>}
                                </>
                            );
                        }}
                    </Mutation>
                </Flexbox>
            </div>
        );
    }
}

export const AddContentComp = WithStore(["selectProgram"])(withStyles(styles)(AddContent));

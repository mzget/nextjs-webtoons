import * as React from "react";
import { Query } from "react-apollo";
import TextField from "@material-ui/core/TextField";
import { withStyles, StyleRulesCallback } from "@material-ui/core/styles";
import { grey, common } from "@material-ui/core/colors";

import { getScreen, SMALL, XSMALL } from "../utils/responsiveHelper";
import { ListQUERY } from "../queries/ProgramList";

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
});

interface IAddContentProps {
    name: string;
    programId: string;
}

const ProgramsComp = ({ classes, value, handleChange }) => (
    <Query query={ListQUERY} >
        {
            ({ loading, error, data }) => {
                if (loading) { return null; }
                if (error) { return `Error!: ${error}`; }

                const lists = data.lists;

                return (
                    <TextField label="select-programId"
                        select
                        className={classes.textField}
                        value={value}
                        onChange={handleChange("programId")}
                        SelectProps={{
                            native: true,
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        margin="normal"
                    >
                        <option value="" />
                        {lists.map((option) => (
                            <option key={option._id} value={option._id}>
                                {option.name.en}
                            </option>
                        ))}
                    </TextField>
                );
            }
        }
    </Query>
);

class AddContent extends React.Component<any, IAddContentProps> {
    event; constructor(props) {
        super(props);

        this.state = {
            name: "",
            programId: "",
        };

        this.handleChange.bind(this);
    }

    handleChange = (name) => (event) => {
        // test
        console.log(name, event.target.value);
        // @ts-ignore
        this.setState({ [name]: event.target.value });
    }

    render() {
        const { classes } = this.props;

        return (
            <div id="AddContent" className={classes.contentBox}>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        id="name"
                        label="Name"
                        className={classes.textField}
                        value={this.state.name}
                        margin="normal"
                    />
                    <TextField
                        id="uncontrolled"
                        label="Uncontrolled"
                        defaultValue="foo"
                        className={classes.textField}
                        margin="normal"
                    />
                    <TextField
                        required
                        id="required"
                        label="Required"
                        defaultValue="Hello World"
                        className={classes.textField}
                        margin="normal"
                    />
                    <TextField
                        error
                        id="error"
                        label="Error"
                        defaultValue="Hello World"
                        className={classes.textField}
                        margin="normal"
                    />
                    <TextField
                        id="password-input"
                        label="Password"
                        className={classes.textField}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                    />
                    <TextField
                        id="helperText"
                        label="Helper text"
                        defaultValue="Default Value"
                        className={classes.textField}
                        helperText="Some important text"
                        margin="normal"
                    />
                    <TextField
                        id="with-placeholder"
                        label="With placeholder"
                        placeholder="Placeholder"
                        className={classes.textField}
                        margin="normal"
                    />
                    <TextField
                        id="textarea"
                        label="With placeholder multiline"
                        placeholder="Placeholder"
                        multiline
                        className={classes.textField}
                        margin="normal"
                    />
                    <TextField
                        id="search"
                        label="Search field"
                        type="search"
                        className={classes.textField}
                        margin="normal"
                    />
                    <ProgramsComp {...this.props} value={this.state.programId} handleChange={this.handleChange} />
                    <TextField
                        id="full-width"
                        label="Src"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="Video src"
                        helperText="Video src"
                        fullWidth
                        margin="normal"
                    />
                </form>
            </div>
        );
    }
}

export const AddContentComp = withStyles(styles as StyleRulesCallback)(AddContent);

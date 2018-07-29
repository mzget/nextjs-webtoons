import * as React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles, StyleRulesCallback } from "@material-ui/core/styles";
import { grey, common } from "@material-ui/core/colors";

import { getScreen, SMALL, XSMALL } from "../utils/responsiveHelper";

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
});

interface IAddContentProps {
    name: string;
    programId: string;
}
const currencies = [
    {
        value: "USD",
        label: "$",
    },
    {
        value: "EUR",
        label: "€",
    },
    {
        value: "BTC",
        label: "฿",
    },
    {
        value: "JPY",
        label: "¥",
    },
];
class AddContent extends React.Component<any, IAddContentProps> {
    event; constructor(props) {
        super(props);

        this.state = {
            name: "",
            programId: "",
        };
    }

    handleChange = (name) => (event) => {
        // test
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
                    <TextField
                        id="select-programId"
                        select
                        label="select-programId"
                        className={classes.textField}
                        value={this.state.programId}
                        onChange={this.handleChange("programId")}
                        SelectProps={{
                            native: true,
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        margin="normal"
                    >
                        {currencies.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>
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

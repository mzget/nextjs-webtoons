"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const TextField_1 = require("@material-ui/core/TextField");
const styles_1 = require("@material-ui/core/styles");
const colors_1 = require("@material-ui/core/colors");
const responsiveHelper_1 = require("../utils/responsiveHelper");
const contentDiv = (responsiveHelper_1.getScreen().appWidth <= responsiveHelper_1.XSMALL) ? "100%" : `${responsiveHelper_1.XSMALL}px`;
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
        backgroundColor: colors_1.common.white,
    },
});
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
class AddContent extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = (name) => (event) => {
            // test
        };
        this.state = {
            name: "",
            programId: "",
        };
    }
    render() {
        const { classes } = this.props;
        return (<div id="AddContent" className={classes.contentBox}>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField_1.default id="name" label="Name" className={classes.textField} value={this.state.name} margin="normal"/>
                    <TextField_1.default id="uncontrolled" label="Uncontrolled" defaultValue="foo" className={classes.textField} margin="normal"/>
                    <TextField_1.default required id="required" label="Required" defaultValue="Hello World" className={classes.textField} margin="normal"/>
                    <TextField_1.default error id="error" label="Error" defaultValue="Hello World" className={classes.textField} margin="normal"/>
                    <TextField_1.default id="password-input" label="Password" className={classes.textField} type="password" autoComplete="current-password" margin="normal"/>
                    <TextField_1.default id="helperText" label="Helper text" defaultValue="Default Value" className={classes.textField} helperText="Some important text" margin="normal"/>
                    <TextField_1.default id="with-placeholder" label="With placeholder" placeholder="Placeholder" className={classes.textField} margin="normal"/>
                    <TextField_1.default id="textarea" label="With placeholder multiline" placeholder="Placeholder" multiline className={classes.textField} margin="normal"/>
                    <TextField_1.default id="search" label="Search field" type="search" className={classes.textField} margin="normal"/>
                    <TextField_1.default id="select-programId" select label="select-programId" className={classes.textField} value={this.state.programId} onChange={this.handleChange("programId")} SelectProps={{
            native: true,
            MenuProps: {
                className: classes.menu,
            },
        }} margin="normal">
                        {currencies.map((option) => (<option key={option.value} value={option.value}>
                                {option.label}
                            </option>))}
                    </TextField_1.default>
                    <TextField_1.default id="full-width" label="Src" InputLabelProps={{
            shrink: true,
        }} placeholder="Video src" helperText="Video src" fullWidth margin="normal"/>
                </form>
            </div>);
    }
}
exports.AddContentComp = styles_1.withStyles(styles)(AddContent);

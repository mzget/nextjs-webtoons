import * as React from "react";
import { Query } from "react-apollo";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import { SeasonsQuery } from "../queries/ProgramList";

const RenderTextField = ({ classes, value, lists, handleChange }:
    { classes: any, value: any, lists: any[], handleChange: any }) => (
        <TextField label="select-seasonId"
            select
            className={classes.textField}
            value={value}
            onChange={handleChange("seasonId")}
            SelectProps={{
                native: true,
                MenuProps: {
                    className: classes.menu,
                },
            }}
            margin="normal"
        >
            <option value="" />
            {
                (lists && lists.length > 0) ?
                    lists.map((option) => (
                        <option key={option._id} value={option._id}>
                            {`${option.no} : ${option.name}`}
                        </option>
                    )) :
                    null
            }
        </TextField>
    );

export class SeasonsComp extends React.Component<{ classes, value, programId, handleChange }, any> {
    render() {
        const { classes, value, programId, handleChange } = this.props;

        return (
            <div>
                {
                    (programId === "") ?
                        RenderTextField({ classes, value, null, handleChange })
                        :
                        <Query query={SeasonsQuery} variables={{ programId }}>
                            {({ loading, error, data }) => {
                                if (loading) {
                                    return (
                                        <Typography variant="subheading" gutterBottom>
                                            Loading...
                                        </Typography>
                                    );
                                }
                                if (error) { return `Error!: ${error}`; }

                                console.log("Seasons", data);
                                const lists = data.seasons;
                                return RenderTextField({ classes, value, lists, handleChange });
                            }
                            }
                        </Query>
                }
            </div>
        );
    }
}

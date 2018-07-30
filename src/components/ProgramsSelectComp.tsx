import * as React from "react";
import { Query } from "react-apollo";
import TextField from "@material-ui/core/TextField";

import { ListQUERY } from "../queries/ProgramList";

export const ProgramsComp = ({ classes, value, handleChange }) => (
    <Query query={ListQUERY} >
        {({ loading, error, data }) => {
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

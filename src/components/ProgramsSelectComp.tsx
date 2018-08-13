import * as React from "react";
import { Query } from "react-apollo";
import TextField from "@material-ui/core/TextField";
import StoreContext, { IStore } from "../contextStore/storeContext";
import { selectProgram } from "../actions/storeActions";
import { ProgramListQUERY } from "../gqls/ProgramList";

export class ProgramsSelectComp extends React.Component<any, any> {
    render() {
        const { value, handleChange, classes } = this.props;

        return (
            <Query query={ProgramListQUERY} >
                {({ loading, error, data }) => {
                    if (loading) { return null; }
                    if (error) { return `Error!: ${error}`; }

                    console.log("programList", data.lists);
                    const lists = data.lists;

                    return (
                        <StoreContext.Consumer>
                            {({ state, updateState }: IStore) => {
                                return (
                                    <TextField
                                        label="select-programId"
                                        select
                                        className={classes.textField}
                                        value={value}
                                        onChange={(e) => {
                                            const id = e.target.value;
                                            handleChange("programId")(e);
                                            updateState(selectProgram({ lists, id }));
                                        }}
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
                            }}
                        </StoreContext.Consumer>
                    );
                }
                }
            </Query>
        );
    }
}

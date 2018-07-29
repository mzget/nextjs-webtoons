import { grey } from "@material-ui/core/colors";

export const styles = (theme) => {
    return ({
        root: {
            flex: 1,
            marginTop: `64px`,
            backgroundColor: grey["100"],
            height: `calc(100vh - 64px)`,
        },
    });
};

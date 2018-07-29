import { grey } from "@material-ui/core/colors";

export const styles = (theme) => {
    return ({
        root: {
            flex: 1,
            marginTop: `64px`,
            backgroundColor: grey["200"],
            height: `100%`,
            minHeight: `calc(100vh - 64px)`,
        },
    });
};

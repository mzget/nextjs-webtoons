"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const router_1 = require("next/router");
const react_apollo_1 = require("react-apollo");
const ProgramList_1 = require("../queries/ProgramList");
function PlayContent(props) {
    const { loading, error, content } = props.data;
    console.info("PlayContent", props);
    if (loading) {
        return <p>{loading}</p>;
    }
    if (error) {
        return <p>{error.message}</p>;
    }
    return (<div>
            {(loading) ?
        <p>{loading}</p>
        :
            <div style={{ margin: 8 }}>
                        <p style={{ marginLeft: 12 }}>
                            <strong>{`ซีซั่น ${content.season.no} ${content.season.name}`}</strong>
                        </p>
                        <p style={{ marginLeft: 12 }}>{`ตอนที่ ${content.epNo} ${content.epName.th}`}</p>
                        <React.Fragment>
                            <video height={"480"} controls src={content.src}>
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </React.Fragment>
                    </div>}
        </div>);
}
const PlayContentWithData = react_apollo_1.compose(react_apollo_1.graphql(ProgramList_1.Content_QUERY, {
    options: (props) => ({ variables: { episode: props.router.query.ep } }),
}))(PlayContent);
exports.default = router_1.withRouter(PlayContentWithData);

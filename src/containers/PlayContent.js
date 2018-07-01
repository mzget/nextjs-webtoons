"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_apollo_1 = require("react-apollo");
const router_1 = require("next/router");
const ProgramList_1 = require("../queries/ProgramList");
const SeasonHeader_1 = require("../components/SeasonHeader");
function PlayContent(props) {
    const { loading, error, content } = props.data;
    const { ep, season } = props.router.query;
    if (loading) {
        return <p>{loading}</p>;
    }
    if (error) {
        return <p>{error.message}</p>;
    }
    return (<div>
            <div style={{ margin: 8 }}>
                <SeasonHeader_1.default programId={"5a26828bf37263b3e436a2d7"} id={parseInt(season)}/>
                <p style={{ marginLeft: 12 }}>{`ตอนที่ ${content.epNo} ${content.epName.th}`}</p>
                <React.Fragment>
                    <video height={"480"} controls src={content.src}>
                        Sorry, your browser doesn't support embedded videos.
                            </video>
                </React.Fragment>
            </div>
        </div>);
}
const PlayContentWithData = react_apollo_1.compose(react_apollo_1.graphql(ProgramList_1.Content_QUERY, {
    options: (props) => ({ variables: { episode: props.router.query.ep } }),
}))(PlayContent);
exports.default = router_1.withRouter(PlayContentWithData);

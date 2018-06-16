import * as React from "react";
import { withRouter } from "next/router";
import { ComposeApollo } from "../lib/withData";
import withMaterialUI from "../lib/withMaterialUI";
import PlayContent from "../src/containers/PlayContent";
import { HeaderComponent } from "../src/components/HeaderComp";
function Index(props) {
    console.info("Play page", props);
    return (React.createElement(HeaderComponent, null,
        React.createElement(PlayContent, Object.assign({}, props))));
}
export default ComposeApollo(withMaterialUI(withRouter(Index)));
;

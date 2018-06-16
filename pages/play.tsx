import * as React from "react";
import { withRouter } from "next/router";
import { ComposeApollo } from "../lib/withData";
import withMaterialUI from "../lib/withMaterialUI";

import PlayContent from "../src/containers/PlayContent";

function Index(props: any) {
    console.info("Play page", props);

    return (
        <div>
            <PlayContent {...props} />
        </div>
    );
}

export default ComposeApollo(withMaterialUI(withRouter(Index)));;

import * as React from "react";
import { ComposeApollo } from "../lib/withData";
import withMaterialUI from "../lib/withMaterialUI";

import PlayContent from "../src/containers/PlayContent";

const Index = (props: any) => (
    <div>
        <PlayContent {...props} />
    </div>
);

const Page = withMaterialUI(Index);
const PlayPageWithData = ComposeApollo(Page);

export default PlayPageWithData;

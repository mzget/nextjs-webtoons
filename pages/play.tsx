import * as React from "react";
import withData from "../lib/withData";
import withMaterialUI from "../lib/withMaterialUI";

import PlayContent from "../src/containers/PlayContent";

const Index = (props: any) => (
    <div>
        <PlayContent />
    </div>
);

const Page = withMaterialUI(Index);
const PlayPageWithData = withData(Page);

export default PlayPageWithData;

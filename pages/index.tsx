import * as React from "react";
import withData from "../lib/withData";
import withMaterialUI from "../lib/withMaterialUI";

import PlayContent from "../src/containers/PlayContent";

const Index = (props: any) => (
    <div>
        {console.log("LOG", props)}
        <PlayContent />
    </div>
);

const HomePage = withMaterialUI(Index);
const HomeWithData = withData(HomePage);

export default HomeWithData;

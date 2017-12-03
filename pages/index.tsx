import * as React from "react";
import withData from "../lib/withData";
import withMaterialUI from "../lib/withMaterialUI";

import PlayContent from "../src/containers/PlayContent";
import Programs from "../src/containers/Programs";

const Index = (props: any) => (
    <div>
        {console.log("LOG", props)}
        <Programs />
    </div>
);

const HomePage = withMaterialUI(Index);
const HomeWithData = withData(HomePage);

export default HomeWithData;

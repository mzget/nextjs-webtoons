import * as React from "react";
import Flexbox from "flexbox-react";
import withData from "../lib/withData";
import withMaterialUI from "../lib/withMaterialUI";

import { getScreen } from "../src/utils/responsiveHelper";
import Programs from "../src/containers/Programs";

const Index = (props: any) => (
    <Flexbox flexDirection="row" justifyContent="center" height={"100%"}>
        <Flexbox />
        <div id="home">
            {
                console.log("LOG", props, getScreen())
            }
            <Programs />
        </div>
        <Flexbox />
    </Flexbox >
);

const HomePage = withMaterialUI(Index);
const HomeWithData = withData(HomePage);

export default HomeWithData;

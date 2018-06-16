import * as React from "react";
import Flexbox from "flexbox-react";

import { ComposeApollo } from "../lib/withData";
import withMaterialUI from "../lib/withMaterialUI";

import { getScreen } from "../src/utils/responsiveHelper";
import Programs from "../src/containers/Programs";
import { HeaderComponent } from "../src/components/HeaderComp";


const Index = (props: any) => (
    <HeaderComponent>
        <Flexbox flexDirection="row" justifyContent="center" height={"100%"}>
            <Flexbox />
            <div id="home">
                {
                    console.log("Home page", props, getScreen())
                }
                <Programs />
            </div>
            <Flexbox />
        </Flexbox >
    </HeaderComponent>
);

const HomePage = withMaterialUI(Index);
export default ComposeApollo(HomePage);

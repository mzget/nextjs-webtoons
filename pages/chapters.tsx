import * as React from "react";
import WithMaterialUI from "../lib/withMaterialUI";
import { ComposeApollo } from "../lib/withData";
import { List, ListItem } from "material-ui/List";
import { compose, graphql } from "react-apollo";
import Flexbox from "flexbox-react";

import { withRouter, RouterProps } from "next/router";
import { Contents_QUERY } from "../src/queries/ProgramList";

import { getScreen } from "../src/utils/responsiveHelper";
import { IContentProps, IRouteProps } from "../src/utils/structs";
import ContentList from "../src/components/ContentList";

interface ISeasonPageProps extends IContentProps, IRouteProps { }


function onClickItem(router: RouterProps, data: any) {
    router.push({
        pathname: "/play",
        query: { ep: `${data}` },
    });
}

function Chapters(props: { router: RouterProps }) {
    console.info("Chapters page", props);

    return (
        <div>
            <Flexbox flexDirection="row" justifyContent="center" height={"100%"}>
                <Flexbox />
                <div id="seasons">
                    <ContentList {...props}
                        onClickContent={(data) => onClickItem(props.router, data)}
                    />
                </div>
                <Flexbox />
            </Flexbox >
        </div>
    );
}

export default ComposeApollo(withRouter(WithMaterialUI(Chapters)));

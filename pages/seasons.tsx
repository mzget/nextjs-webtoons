import * as React from "react";
import WithMaterialUI from "../lib/withMaterialUI";
import withData from "../lib/withData";
import { List, ListItem } from "material-ui/List";

import Router from "next/router";
import Flexbox from "flexbox-react";

import { getScreen } from "../src/utils/responsiveHelper";
import { IContentProps, IRouteProps } from "../src/structs/Structs";
import ContentList from "../src/components/ContentList";

interface ISeasonPageProps extends IContentProps, IRouteProps { }

class Seasons extends React.Component<ISeasonPageProps, any> {
    componentWillMount() {
        this.onClickItem = this.onClickItem.bind(this);
    }

    onClickItem(data: any) {
        Router.push({
            pathname: "/play",
            query: { ep: `${data}` },
        });
    }

    render() {
        return (
            <Flexbox flexDirection="row" justifyContent="center" height={"100%"}>
                <Flexbox />
                <div id="seasons">
                    <ContentList {...this.props} onClickContent={this.onClickItem} />
                </div>
                <Flexbox />
            </Flexbox >
        );
    }
}

const SeasonPage = WithMaterialUI(Seasons);
export default withData(SeasonPage);

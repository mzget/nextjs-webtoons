import * as React from "react";
import WithMaterialUI from "../lib/withMaterialUI";
import withData from "../lib/withData";
import { List, ListItem } from "material-ui/List";

import Router from "next/router";

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
            <div>
                <ContentList {...this.props} onClickContent={this.onClickItem} />
            </div>
        );
    }
}

const SeasonPage = WithMaterialUI(Seasons);
export default withData(SeasonPage);

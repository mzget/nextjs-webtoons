import React, { Component } from "react";
import StoreContext, { IStore } from "./storeContext";

export function WithStore(selectors: string[]) {
    return (Comp: React.ComponentClass<{ updateState }>) =>
        class ComposeStore extends React.Component {
            render() {
                return (
                    <StoreContext.Consumer>
                        {
                            ({ state, updateState }: IStore) => {
                                let props = {};
                                selectors.map((v) => {
                                    props = Object.assign(props, { [v]: state[v] });
                                });
                                return <Comp {...props} updateState={updateState} />;
                            }
                        }
                    </StoreContext.Consumer>
                );
            }
        };
}

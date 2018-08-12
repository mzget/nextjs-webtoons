import React, { Component } from "react";
import { ActionDelegate, IStore, IStoreState } from "./store";

const initialStore = {
    programs: [] as any[],
} as IStoreState;

// Initialize a context
const StoreContext = React.createContext({});

class EnhancedContextStore extends Component<any, IStoreState> {
    constructor(props) {
        super(props);

        this.state = { ...initialStore };
        this.updateState = this.updateState.bind(this);
    }

    public updateState(actionDelegate: ActionDelegate, callback?: () => void) {
        this.setState(actionDelegate, (callback) ? callback : () => console.log("Next State", this.state));
    }

    public render() {
        const store = { state: { ...this.state }, updateState: this.updateState } as IStore;
        return (
            <StoreContext.Provider value={store}  >
                {this.props.children}
            </StoreContext.Provider>
        );
    }
}

export default StoreContext;
export { EnhancedContextStore };
export { IStoreState, IStore } from "./store";

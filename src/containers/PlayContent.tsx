import * as React from "react";

export interface IContent {
    name: string; season: string; ep_name: string; src: string;
}

class PlayContent extends React.Component<IContent, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        const { name, ep_name, season, src } = this.props;
        return (
            <div>
                <p>{name}</p>
                <p>{season}</p>
                <p>{ep_name}</p>
                <video width="320" height="240" controls src={src} >
                    Sorry, your browser doesn't support embedded videos.
                </video>
            </div>
        );
    }
}

export default PlayContent;

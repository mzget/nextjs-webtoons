// This is the Link API
import Link from "next/link";
import * as React from "react";
import withData from "../lib/withData";

import PlayContent from "../src/containers/PlayContent";

const Index = (props: any) => (
    <div>
        {console.log(props)}
        <Link href="/about">
            <button>About Page</button>
        </Link>
        <PlayContent />
    </div>
);

export default withData((props: any) => <Index {...props} />);

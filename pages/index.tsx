// This is the Link API
import Link from "next/link";
import * as React from "react";

import PlayContent from "../src/containers/PlayContent";

const Index = () => (
    <div>
        <Link href="/about">
            <button>About Page</button>
        </Link>
        <p>Hello Next.js</p>
        <PlayContent name="one pieces" season={"18"} ep_name={"18"} />
    </div>
);

export default Index;

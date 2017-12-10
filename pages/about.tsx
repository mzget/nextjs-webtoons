import * as  React from "react";
import WithMaterialUI from "../lib/withMaterialUI";

export const About = () => (
    <div>
        <p style={{ marginLeft: 12 }}>
            <strong>{`วันพีช One Piece การ์ตูนวันพีช ดูวันพีช รวมวันพีชทุกตอน`}</strong>
        </p>
    </div>
);

export default WithMaterialUI(About);

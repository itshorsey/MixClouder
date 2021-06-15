import React from "react";
import Mix from "../Mix";

const MixContainer = ({ stations }) => (
  <section>
    {stations.map((mixes) => (
        <Mix mixes={mixes} />
    ))}
  </section>
);

export default MixContainer;

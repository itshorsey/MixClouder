import React from "react";
import Tag from "../Tag";

const MixContainer = ({ stations }) => (
  <section className="flex flex-wrap justify-center">
    {stations.map((mixes) => (
        <div className="outline w-20 pa3 mr2 mb2">
          <img src={mixes.pictures.large} className="w-100"/>
          <p>{mixes.name}</p>
          <Tag tags={mixes.tags} />
        </div>
    ))}
  </section>
);

export default MixContainer;

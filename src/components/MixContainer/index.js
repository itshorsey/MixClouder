import React from "react";
import Tag from "../Tag";

const MixContainer = ({ stations }) => {
  
  console.log(`from template: `, stations)

  return (
    <section className="flex flex-wrap justify-center">
    {stations.map((mixes) => (
        <div className="outline w-20 pa3 mr2 mb2">
          <img alt={mixes.name} src={mixes.pictures.large} className="w-100"/>
          <p>{mixes.user.name}</p>
          <p>{mixes.name}</p>
          <p>Play Count: {mixes.play_count}</p>
          <Tag tags={mixes.tags} />
        </div>
    ))}
  </section>
  )
  } 

export default MixContainer;

import React from "react";
import Tag from "../Tag";

const MixContainer = ({ stations, pickMix }) => {
  // console.log(`from template: `, stations)

  return (
    <section className="flex flex-wrap justify-center mv5">
      {stations.map((mixes) => (
        <section className="outline w-20 pa3 mr2 mb2">
          <div onClick={() => pickMix(mixes)}>
            <img
              alt={mixes.name}
              src={mixes.pictures.large}
              className="w-100"
            />
          </div>
          <p>
            <a className="white" href={mixes.url}>
              {mixes.user.name}
            </a>
          </p>
          <p>{mixes.name}</p>
          <p>Play Count: {mixes.play_count}</p>
          <Tag tags={mixes.tags} />
        </section>
      ))}
    </section>
  );
};

export default MixContainer;

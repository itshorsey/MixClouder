import React from "react";

const Mix = ({ mix }) => (
  <div className="outline w-20 mb3 pa3 mr2">
    <h4>Mix</h4>
    <img src={mix.image} />
    <h4>
      <a href={mix.url}>{mix.name}</a>
    </h4>
    <p>{mix.user}</p>
    {mix.tags.map((tag) => (
      <div>{tag.name}</div>
    ))}
  </div>
);

export default Mix;

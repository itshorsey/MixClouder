import React from "react";

const Mix = ({ mixes }) => (
  <div>
    {mixes.map((mix) => (
      <section>
        <img src={mix.pictures.medium} />
        <p>
          <a href={mix.url}>
            {mix.name}
          </a>
        </p>
        <p>{mix.user.name}</p>
      </section>
    ))}
  </div>
);

export default Mix;

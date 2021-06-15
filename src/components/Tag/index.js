import React from "react";

const Tag = ({ tags }) => (
  <div>
    {tags.map((tag) => (
      <section>
        {tag.name}
      </section>
    ))}
  </div>
);

export default Tag;

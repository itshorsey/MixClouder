import React, { useState, useEffect } from "react";
import MixContainer from "./components/MixContainer/";

const Mix = ({ name, url }) => (
  <div>
    <h2>{name}</h2>
    <p>{url}</p>
  </div>
);

const App = () => {
  const [mixes, setMixes] = useState([]);
  const stations = [
    "balamii",
    "CashmereRadio",
    "dazed",
    "hotelradioparis",
    "ntsradio",
  ];

  useEffect((didUpdate) => {
    const fetchData = async (station) => {
      const response = await fetch(
        `https://api.mixcloud.com/${station}/cloudcasts/`
      );
      const { data } = await response.json();
      return data;
    };

    // stations.map((station) => fetchData(station));
    stations.forEach((station) => console.log(fetchData(station).));
  }, []);
  console.log(`outer realm:`, mixes);
  return <MixContainer mixes={mixes} />;
};

export default App;

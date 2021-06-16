import React, { useState, useEffect } from "react";
import MixContainer from "./components/MixContainer/";

const App = () => {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    const stationsList = [
      "balamii",
      "CashmereRadio",
      "dazed",
      "hotelradioparis",
    ];

    const fetchData = async (station) => {
      const response = await fetch(
        `https://api.mixcloud.com/${station}/cloudcasts/`
      );
      const { data } = await response.json();
      setStations((stations) => [...stations, data]);
    };
    
    stationsList.map((station) => (
      fetchData(station)
    ))

  }, []);

  console.log(`stations: `, stations.flat())
  return <MixContainer stations={stations.flat()} />;
  // return <h1>Hi</h1>
};

export default App;

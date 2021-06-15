import React, { useState, useEffect } from "react";
import MixContainer from "./components/MixContainer/";

const App = () => {
  const [stations, setStations] = useState([]);
  const [mixes, setMixes] = useState([]);
  const stationsList = [
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
      console.log(data)
      setStations( prevState => ([...prevState, data].flat()))
    };
    
    stationsList.map((station) => (
      fetchData(station)
    ))

  }, []);

  console.log(`stations: `, stations.flat())

  return <MixContainer stations={stations} />;
};

export default App;

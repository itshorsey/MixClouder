import React, { useState, useEffect } from "react";
import MixContainer from "./components/MixContainer/";
import {GlobalStyle} from "./styles"
import Header from "./components/Header"
import DetailPanel from './components/DetailPanel'

const App = () => {
  const [stations, setStations] = useState([]);
  const [selectedMix, setSelectedBook] = useState(null);
  const [filteredMix, setFilteredMix] = useState(false);

  useEffect(() => {
    const stationsList = [
      "balamii",
      "CashmereRadio",
      "dazed",
      "hotelradioparis",
    ];
    const nothanks = ["techno", "hardcore", "drone", "doom", "edm", "disco", "drill"]

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

  const pickMix = (mix) => {
    setSelectedBook(mix)
  }

  //console.log(selectedMix)

  // console.log(`stations: `, stations.flat())
  return (
  <>
    <GlobalStyle />
    <Header />
    <MixContainer pickMix={pickMix} stations={stations.flat()} />
    {selectedMix && <DetailPanel mix={selectedMix} />}
  </>
  )
  // return <h1>Hi</h1>
};

export default App;

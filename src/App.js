import React, { useState, useEffect } from "react";
import MixContainer from "./components/MixContainer/";
import {GlobalStyle} from "./styles"
import Header from "./components/Header"
import DetailPanel from './components/DetailPanel'

const App = () => {
  const [stations, setStations] = useState([]);
  const [selectedMix, setSelectedBook] = useState(null);

  useEffect(() => {
    const stationsList = [
      "balamii",
      "CashmereRadio",
      "dazed",
      "hotelradioparis",
    ];
    const nothanks = ["techno", "hardcore", "drone", "doom", "edm", "disco", "drill", "dance", "electronic"]

    const fetchData = async (station) => {
      const response = await fetch(
        `https://api.mixcloud.com/${station}/cloudcasts/`
      );
      let { data } = await response.json();

      data = data.filter((d) => {
        let tags = d.tags.map((d) => d.name.toLowerCase())
        for (let i = 0; i < nothanks.length; i++) {
          if (tags.indexOf(nothanks[i]) !== -1) {
            return false
          }
          return true
        }
      })
      
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

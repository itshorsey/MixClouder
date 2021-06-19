import React, { useState, useEffect } from "react";
import MixContainer from "./components/MixContainer/";
import { GlobalStyle } from "./styles";
import Header from "./components/Header";
import DetailPanel from "./components/DetailPanel";

const App = () => {
  const [stations, setStations] = useState([]);
  const [selectedMix, setSelectedBook] = useState(null);

  useEffect(() => {
    const stationsList = [
      "balamii",
      "CashmereRadio",
      "dazed",
      "thelotradio",
      "ntsradio",
      "CrackMagazine",
      "worldwidefm",
      "lowlight",
      "dublab",
      "know_wave",
      "hotelradioparis",
    ];
    const nothanks = [
      "techno",
      "hardcore",
      "drone",
      "doom",
      "edm",
      "disco",
      "drill",
      "dance",
      "electronic",
      "droneday",
      "trance",
      "electronic music",
      "electronica",
      "reggaeton",
      "dancehall",
      "uk techno",
      "disaster",
      "industrial",
    ];

    const fetchData = async (station) => {
      const response = await fetch(
        `https://api.mixcloud.com/${station}/cloudcasts/?limit=100`
      );
      let { data, paging } = await response.json();
      console.log(paging);
      console.log(data);

      data = data.filter((d) => {
        let tags = d.tags.map((d) => d.name.toLowerCase());
        for (let i = 0; i < nothanks.length; i++) {
          if (tags.indexOf(nothanks[i]) !== -1) {
            return false;
          }
        }
        return true;
      });

      setStations((stations) => [...stations, data]);
    };

    stationsList.map((station) => fetchData(station));
  }, []);

  const pickMix = (mix) => {
    setSelectedBook(mix);
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <MixContainer pickMix={pickMix} stations={stations.flat()} />
      {selectedMix && <DetailPanel mix={selectedMix} />}
    </>
  );
  // return <h1>Hi</h1>
};

export default App;

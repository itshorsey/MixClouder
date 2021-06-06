import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    let radioStations = [
      "balamii",
      "CashmereRadio",
      "dazed",
      "hotelradioparis",
    ];

    let mixes = [];
    let mix = {}
  }

  componentDidMount() {
    // try {
    //   const response = fetch(`https://api.mixcloud.com/balamii/cloudcasts/`)
    //     .then(res => res.json())
    //     .then((result) =>{
    //       const {data} = result
    //       // console.log(data);
    //       this.display(data[0])
    //     })
    // } catch (error) {
    //   console.log(error);
    // }
    this.searchMixCloud("balamii")
  }

  searchMixCloud = async (mixSearchTerm) => {
    try {
      const response = await fetch(`https://api.mixcloud.com/${mixSearchTerm}/cloudcasts/`)
      const { data } = await response.json();
      this.displayMix(data)
    } catch(error) {
      console.log(error);
    }
  }

  displayMix = (mix) => {
    const {name, url} = mix
    mix.name = name
    mix.url = url
  }

  mixLists = (mix) => {
    this.mixes.push(mix)
  }



  render() {
    return (
      <div className="App" onLoad={this.searchMixes}>
        <h1>Hi</h1>
      </div>
    );
  }
}

export default App;

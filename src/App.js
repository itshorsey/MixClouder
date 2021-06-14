import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

const Mix = ({name, url}) => (
  <div>
    <h2>{name}</h2>
    <p>{url}</p>
  </div>
)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mixes: []
    }
  }

  componentDidMount() {
    //this.searchMixCloud("ntsradio")
    this.stationRoundUp()
  }

  searchMixCloud = async (mixSearchTerm) => {
    try {
      const response = await fetch(`https://api.mixcloud.com/${mixSearchTerm}/cloudcasts/`)
      const { data } = await response.json();
      console.log(data)
      // this.mixLists(data)
      // const response = await fetch('https://api.are.na/v2/channels/test-channel-kecfu5msrfs')
      // const { contents} = await response.json();
      // console.log(data);
      
      this.mixLists(data)
    } catch(error) {
      console.log(error);
    }
  }


  stationRoundUp = () => {
    const radioStations = [
      "balamii",
      "CashmereRadio",
      "dazed",
      "hotelradioparis",
      "ntsradio",
    ]

    radioStations.map((station) => {
      this.searchMixCloud(station)
    })
  }

  mixLists = (mix) => {
    mix.map((el) => {
      const {name, url, pictures, tags, user} = el
      let tagList = []
      if (tags.length > 0) {
        tags.map((tag) => {
          tagList.push(tag)
          console.log(tag["name"])
        })
      }
      this.setState((prevState, props) => ({
        ...prevState,
        mixes: [...prevState.mixes, { name: name, url: url, image: pictures["640wx640h"], tags: tagList, user: user["name"]}]
      }))
    })
  }



  render() {
    const {mixes} = this.state

    return (
      <div className="App" onLoad={this.searchMixes}>
        <section className="flex flex-wrap">
        {mixes.map(mix => (
          <div className="outline w-20 mb3 pa3 mr2">
          <img src={mix.image} />
          <h4>
            <a href={mix.url}>
              {mix.name}
            </a>
          </h4>
          <p>{mix.user}</p>
          {mix.tags.map(tag => <div>{tag.name}</div>)}
          </div>
        ))}
        </section>
      </div>
    );
  }
}

export default App;

import React from "react";
import SearchBar from "./SearchBar";
import youtube from "./apis/youtube";

const KEY = "AIzaSyB55XCC0dyQzl2VZRmLmcHD58kUiRZI_WM";


class App extends React.Component {
  state = {
    videos: []
  };

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        key:KEY
      }
    });
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />i have{" "}
        {this.state.videos.length} videos
      </div>
    );
  }
}

export default App;

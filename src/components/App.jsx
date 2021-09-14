//Title: Music Library Viewer
//Author: Richard Fleming
//Create Date: September 10, 2021


import React, { Component, useState } from "react";
import MusicViewer from "./MusicViewer/MusicViewer";
import "./App.css";
import CreateSong from "./CreateSong/CreateSong";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    };
  }

  render() {
    return (
      <div className="mainBody">
        <div className="top">
        <h1 className="head1">Music Library Viewer</h1>
        </div>

        <hr />
        <MusicViewer />
        <hr />
        <CreateSong />
      </div>
    );
  }
}

export default App;

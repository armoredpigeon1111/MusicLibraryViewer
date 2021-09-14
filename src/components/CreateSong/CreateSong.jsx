import axios from "axios";
import React, { Component } from "react";
import "./CreateSong.css";
class CreateSong extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      artist: "",
      album: "",
      release_date: "",
      genre: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.createSong(this.state);
  };

  async createSong() {
    debugger;
    const song = {
      title: this.state.title,
      artist: this.state.artist,
      album: this.state.album,
      release_date: this.state.release_date,
      genre: this.state.genre,
      likes: 0,
    };
    try {
      let response = await axios.post("http://127.0.0.1:8000/music/", song);
      console.log(response);
      window.location.reload();
    } catch {
      console.log("Unsuccessful Add");
    }
  }

  render() {
    return (
      <div>
        <h1>Create New Song</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Title:</label>
          <input
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
          ></input>
          <br />
          <label>Artist:</label>
          <input
            name="artist"
            onChange={this.handleChange}
            value={this.state.artist}
          ></input>
          <br />
          <label>Album:</label>
          <input
            name="album"
            onChange={this.handleChange}
            value={this.state.album}
          ></input>
          <br />
          <label>Release Date:</label>
          <input
            type="datetime-local"
            name="release_date"
            onChange={this.handleChange}
            value={this.state.release_date}
          ></input>
          <br />
          <label>Genre:</label>
          <input
            name="genre"
            onChange={this.handleChange}
            value={this.state.genre}
          ></input>
          <br />
          <button className="newSongButton" type="submit">
            Add Song
          </button>
        </form>
      </div>
    );
  }
}

export default CreateSong;

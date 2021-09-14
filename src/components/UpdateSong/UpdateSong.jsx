import React, { Component } from "react";
import axios from "axios";
import './UpdateSong.css'

class UpdateSong extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      songID: this.props.songID,
      title: "",
      artist: "",
      album: "",
      release_date: "",
      genre: "",
      likes: 0,
      firstRun: true,
      show: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.updateSong(this.state);
  };

  populateSong() {
    const results = this.props.songs.filter(
      (song) => song.id === this.props.songID
    );
    this.songID = results[0].id;
    this.state.title = results[0].title;
    this.state.artist = results[0].artist;
    this.state.album = results[0].album;
    this.state.release_date = results[0].release_date;
    this.state.genre = results[0].genre;
    this.state.likes = results[0].likes;
    console.log(results[0].title);
  }

  async updateSong() {
    debugger;
    const song = {
      id: this.state.songID,
      title: this.state.title,
      artist: this.state.artist,
      album: this.state.album,
      release_date: this.state.release_date,
      genre: this.state.genre,
      likes: this.state.likes,
    };
    try {
      let response = await axios.put(
        "http://127.0.0.1:8000/music/" + this.state.songID,
        song
      );
      console.log(response);
      window.location.reload();
    } catch {
      console.log("Unsuccessful update");
    }
  }

  cancelUpdate() {
    window.location.reload();
  }

  render() {
    if (this.state.firstRun == true) {
      this.populateSong();
      this.state.firstRun = false;
    }

    return (
      <div className="updateBody">
        <h2>Update Song</h2>
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
            Update Song
          </button>
          <button
            type="button"
            className="cancelButton"
            onClick={this.cancelUpdate}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default UpdateSong;

import React, { Component, useState } from "react";
import axios from "axios";
import "./MusicViewer.css";
import SearchSongs from "../SearchSongs/SearchSongs";
import UpdateSong from "../UpdateSong/UpdateSong";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css'


class MusicViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      updateStatus: false,
      songID: "",
        openModal: false,
    };
  
  }

  componentDidMount() {
    this.getSongs();
  }

  //Gets All Songs in Database
  async getSongs() {
    let response = await axios.get("http://127.0.0.1:8000/music/");
    console.log(response);
    this.setState({
      songs: response.data,
    });
  }


  //Deletes Currently Selected Song from Database
  async deleteSong(songID) {
    let response = await axios.delete("http://127.0.0.1:8000/music/" + songID);
    console.log(response);
    window.location.reload();
  }

  //Sets Song Data Upon Opening UpdateSong in Modal
  updateFormStart(songID) {
    let updateStatus = true;
    this.setState({
      songID: songID,
      updateStatus: true,
    });
  }

//modal
  onClickButton = e =>{
      this.setState({openModal: true})
  }

  onCloseModal = () =>{
      this.setState({openModal:false})
  }

  render() {
    return (
      <div>
        <SearchSongs songs={this.state.songs} />
        <hr />
        <h2>All Songs:</h2>
        <table>
          <thead>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Release Date</th>
            <th>Genre</th>
          </thead>
          {this.state.songs.map((song) => {
            return (
              <tr>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.album}</td>
                <td>{song.release_date}</td>
                <td>{song.genre}</td>
                <td>
                  <button className="btn" onClick={() => this.deleteSong(song.id)}>
                    Delete
                  </button>
                </td>
                <td>
                  <button className="btn" onClick={() => {this.updateFormStart(song.id); this.onClickButton();}}>
                    Update
                  </button>
                </td>
              </tr>
            );
          })}
        </table>

        {/* Update Form Shows on Update Button Click*/}
        {this.state.updateStatus ? (
            <div>
          <Modal classNames="modal" open={this.state.openModal} onClose={this.onCloseModal}>
              <UpdateSong songID={this.state.songID} songs={this.state.songs} />
          </Modal>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default MusicViewer;

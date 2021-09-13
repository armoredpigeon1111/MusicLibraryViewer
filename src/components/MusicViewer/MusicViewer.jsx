import React, { Component } from 'react';
import axios from 'axios';
import './MusicViewer.css'
import SearchSongs from '../SearchSongs/SearchSongs';
import { Modal, Button } from 'react-modal';
import UpdateSong from '../UpdateSong/UpdateSong';


class MusicViewer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            songs: [],
            updateStatus: false,
            songID: '',

         }
    }

    componentDidMount(){
        this.getSongs();
    }

    async getSongs(){
        let response = await axios.get('http://127.0.0.1:8000/music/');
        console.log(response);
        this.setState({
            songs: response.data
        });
    }

    async deleteSong(songID){
        let response = await axios.delete('http://127.0.0.1:8000/music/' + songID);
        console.log(response);
        window.location.reload();

    }

    updateFormStart(songID){
        let updateStatus = true;
        this.setState({
            songID: songID,
            updateStatus: true
        });
    }






    render() { 
        return ( 
            <div>
            <SearchSongs songs = {this.state.songs}/>
            <hr/>
            <h2>All Songs:</h2>
            <table>
                <thead>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Genre</th>
                </thead>
                {this.state.songs.map((song)=>{
                    return(
                        <tr>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.release_date}</td>
                            <td>{song.genre}</td>
                            <td><button onClick ={()=> this.deleteSong(song.id)}>Delete</button></td>
                            <td><button onClick ={()=> this.updateFormStart(song.id)}>Update</button></td>                           
                        </tr>  
                    );
                })}
            </table>

            {/* Update Form */}
                {this.state.updateStatus ?(
                 
                    <UpdateSong songID ={this.state.songID} songs ={this.state.songs}/>
                    
                ): <div>nothing</div>}
            </div>
         );
    }
}
 
export default MusicViewer;
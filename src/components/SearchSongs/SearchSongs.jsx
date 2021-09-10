import axios from 'axios';
import React, { Component } from 'react';
import './SearchSongs.css'
import reactDom from 'react-dom';

class SearchSongs extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            search: '',
            results: [],
            songs: props.songs
         }
    }


    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        });
     }
 
     handleSubmit = (event) =>{
         event.preventDefault();
         this.searchSongs();
     }

     async searchSongs(){

        try{
            const results = this.props.songs.filter(song => 
                song.title.toLowerCase().includes(this.state.search.toLowerCase()) || 
                song.artist.toLowerCase().includes(this.state.search.toLowerCase()) ||
                song.genre.toLowerCase().includes(this.state.search.toLowerCase()));
            console.log(results);
        }
        catch{
            console.log("unable to search")
        }

         
     }

    render() { 
        return ( 
            
            <div>
                <form onSubmit ={this.handleSubmit}>
                    <label>Search:</label>
                    <input name="search" onChange={this.handleChange} value={this.state.search}></input>
                    <button type="submit">Search</button>
                </form>

                

            </div>
         );
    }
}
 
export default SearchSongs;
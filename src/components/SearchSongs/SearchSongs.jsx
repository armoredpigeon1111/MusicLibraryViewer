import axios from 'axios';
import React, { Component } from 'react';
import './SearchSongs.css'

class SearchSongs extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            search: '',
            songs: []
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
         console.log("Search Songs");
         
     }

    render() { 
        return ( 
            
            <div>
                <form onSubmit ={this.handleSubmit}>
                    <label>Search:</label>
                    <input name="search" onChange={this.handleChange} value={this.state.search}></input><br/>
                    <button type="submit">Search</button>
                </form>
            </div>

         );
    }
}
 
export default SearchSongs;
import React, { Component } from 'react';
import './SearchSongs.css'


class SearchSongs extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            search: '',
            results: [],
            songs: props.songs,
            submitted: false
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

     //Searches Song Data for Matching Criteria
     async searchSongs(){
        try{
            const results = this.props.songs.filter(song => 
                song.title.toLowerCase().includes(this.state.search.toLowerCase()) || 
                song.artist.toLowerCase().includes(this.state.search.toLowerCase()) ||
                song.album.toLowerCase().includes(this.state.search.toLowerCase()) ||
                song.genre.toLowerCase().includes(this.state.search.toLowerCase()));
            if(results != ''){
                console.log(results);
                this.state.results = results;
                this.state.submitted = true;
                this.setState({state: this.state});
            }else{
                alert("no results");
            }
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

                {this.state.submitted ? (  
                    <div>
                    <h2>Search Results:</h2>                  
                   <table>
                    <thead>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Release Date</th>
                        <th>Genre</th>
                    </thead>
                    {this.state.results.map((song)=>{
                        return(
                            <tr>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.release_date}</td>
                            <td>{song.genre}</td>
                         
                        </tr>   
                        );
                    })}
                </table>
                </div>
                ):(console.log("Waiting for Search Term"))}
                

            </div>
         );
    }
}
 
export default SearchSongs;
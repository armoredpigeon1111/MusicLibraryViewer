import axios from 'axios';
import React, { Component } from 'react';
import MusicViewer from './MusicViewer/MusicViewer';
import './App.css'
import CreateSong from './CreateSong/CreateSong';
import SearchSongs from './SearchSongs/SearchSongs';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           songs:[]
         }
    }



    render() { 
        return ( 
            <div className="mainBody">
                <h1>Music Library Viewer</h1>
                <hr/>
                <MusicViewer />
                <hr/>
                <CreateSong />
                
            </div>
         );
    }
}
 
export default App;
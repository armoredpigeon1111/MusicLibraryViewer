import React, { Component, useState } from 'react';
import MusicViewer from './MusicViewer/MusicViewer';
import './App.css'
import CreateSong from './CreateSong/CreateSong';
import Modal from './Modal/Modal'


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
                <h1 className="head1">Music Library Viewer</h1>
                <hr/>
                <MusicViewer />
                <hr/>
                <CreateSong />
            </div>
         );
    }
}
 
export default App;
import axios from 'axios';
import React, { Component } from 'react';
import MusicViewer from './MusicViewer/MusicViewer';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           
         }
    }



    render() { 
        return ( 
            <div>
                <h1>Music Library Viewer</h1>
                <MusicViewer />
            </div>
         );
    }
}
 
export default App;
import React, { Component } from 'react';
import MusicViewer from './MusicViewer/MusicViewer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <MusicViewer />
            </div>
         );
    }
}
 
export default App;
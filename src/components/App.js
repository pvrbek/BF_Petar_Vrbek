import React, { Component } from "react";
import Header from './Header.js';
import Body from './Body.js';
import '../styles/App.scss';
import axios from 'axios';
class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Body/>
            </div>
        );
    }
}

export default App;
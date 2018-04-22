import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import {riddles} from "../game/riddle";
import Game from './../game/Game'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game/>
      </div>
    );
  }
}

export default App;

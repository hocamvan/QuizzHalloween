import React, { Component } from 'react';

import Background from './components/Background';
import Devinettes from './components/Devinettes';
import Spider from './components/Spider';
// import ActionBonne from './components/ActionBonne';
// import BonneAnimation from './components/AnimationB';

import './App.css';

// import Questions from './components/Questions';
// import Spider from './components/Spider'
// import Background from './components/Background';
// import ChampsSaisie from './components/ChampsSaisie';
// import Devinettes from './components/Devinettes';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Background />
        {/* <ActionBonne /> */}
        {/* <BonneAnimation /> */}
        <Devinettes />
        <br/>
        <div><Spider /></div>


        {/* // <Questions />
        // <Background />
        // <ChampsSaisie />
        // <div><Spider /></div> */}

      </div>
    );
  }
}

export default App;

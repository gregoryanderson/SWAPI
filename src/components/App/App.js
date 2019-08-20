import React, { Component }from 'react';
import People from '../People/People'
import Planets from '../Planets/Planets'
import Vehicles from '../Vehicles/Vehicles'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  render() {
    return (
    <div>
      <People />
      <Planets />
      <Vehicles />
    </div>
    )
  }
}

export default App;

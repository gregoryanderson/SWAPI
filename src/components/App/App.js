import React, { Component }from 'react';
import People from '../People/People'
import Planets from '../Planets/Planets'
import Vehicles from '../Vehicles/Vehicles'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      info: []
    }
  }

  fetchBios = (info) => {
    // const promises = info.map(person => {
    //   return fetch (person.homeworld)
    //     .then(response => response.json())
    //     .then(data => { ...info, name: person.name})
    // })
    // Promise.all(promises)
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people/')
      .then(response => response.json())
      .then(data => console.log(data.results))
      // .then(data => this.fetchBios(data))
      // .then(person => this.setState({info : person}))
      .catch(error => console.log(error))
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

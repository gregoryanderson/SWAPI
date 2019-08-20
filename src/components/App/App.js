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

  fetchWorld = (peopleInfo) => {
    console.log(peopleInfo)
    const promises = peopleInfo.map(person => {
      return fetch (person.homeworld)
        .then(response => response.json())
        .then(data => ({ ...data, personName: person.name, personSpecies: person.species}))
        .then(personWorldData => this.fetchSpeciesInfo(personWorldData))
        .then(ish => console.log('boo', ish))
        .catch(error => console.log(error))
      })
      return Promise.all(promises)
    }
    
    fetchSpeciesInfo = (personWorldInfo) => {
      console.log('in the damn species method', personWorldInfo)
      const promises = personWorldInfo.personSpecies.map(species => {
        fetch(personWorldInfo.personSpecies[0])
        .then(response => response.json())
        .then(data => ({...data, personName: personWorldInfo.personName, personSpecies: data.name, personPlanet: personWorldInfo.name, personPlanetPopulation: personWorldInfo.population, personLanguage: data.language}))
        .catch(error => console.log(error))
    })
    Promise.all(promises)
  }


  componentDidMount() {
    fetch('https://swapi.co/api/people/')
      .then(response => response.json())
      .then(data => this.fetchWorld(data.results))
      .then(info => this.setState({info}))
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

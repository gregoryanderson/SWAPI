import React, { Component }from 'react';
import People from '../People/People'
import Planets from '../Planets/Planets'
import Vehicles from '../Vehicles/Vehicles'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      planets: [],
      vehicles: []
    }
  }

  fetchWorld = (peopleInfo) => {
    const promises = peopleInfo.map(person => {
      return fetch (person.homeworld)
        .then(response => response.json())
        .then(data => ({ ...data, personName: person.name, personSpecies: person.species}))
        .then(personWorldData => this.fetchSpeciesInfo(personWorldData))
        .catch(error => console.log(error))
      })
      return Promise.all(promises)
    }
    
    fetchSpeciesInfo = (personWorldInfo) => {
      const promises = personWorldInfo.personSpecies.map(species => {
        return fetch(personWorldInfo.personSpecies[0])
        .then(response => response.json())
        .then(data => ({personName: personWorldInfo.personName, personSpecies: data.name, personPlanet: personWorldInfo.name, personPlanetPopulation: personWorldInfo.population, personLanguage: data.language}))
        .catch(error => console.log(error))
      })
      return Promise.all(promises)
    }

    fetchPlanetInfo = (planetInfo) => {
      const promises = planetInfo.map(planet => {
          return {
            name: planet.name,
            terrain: planet.terrain,
            population: planet.population,
            climate: planet.climate,
            residents: planet.residents.map(resident => {
              return fetch(resident)
              .then(res => res.json())
              .then(data => data.name)
              .catch(err => console.log(err))
            })
          }
      })
      return Promise.all(promises)
    }
    

    componentDidMount() {
      fetch('https://swapi.co/api/people/')
      .then(response => response.json())
      .then(data => this.fetchWorld(data.results))
      .then(info => this.setState({people: info.flat()}))
      .then(fetch('https://swapi.co/api/planets/')
      .then(res => res.json())
      .then(data => this.fetchPlanetInfo(data.results))
      .then(planetInfo => this.setState({planets: planetInfo})))
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

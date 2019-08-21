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

  fetchPlanetInfoForPerson = (peopleInfo) => {
    const promises = peopleInfo.map(person => {
      return fetch (person.homeworld)
        .then(res => res.json())
        .then(data => ({ ...data, personName: person.name, personSpecies: person.species}))
        .then(personAndWorldData => this.fetchSpeciesInfoForPerson(personAndWorldData))
        .catch(err => console.log(err))
      })
      return Promise.all(promises)
    }
    
    fetchSpeciesInfoForPerson = (personWorldInfo) => {
      const promises = personWorldInfo.personSpecies.map(species => {
        return fetch(personWorldInfo.personSpecies[0])
        .then(res => res.json())
        .then(data => ({personName: personWorldInfo.personName, personSpecies: data.name, personPlanet: personWorldInfo.name, personPlanetPopulation: personWorldInfo.population, personLanguage: data.language}))
        .catch(err => console.log(err))
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

    identifyVehicleInfo = (vehicleInfo) => {
      return vehicleInfo.map(vehicle => {
        return {
          name: vehicle.name,
          model: vehicle.model,
          class: vehicle.vehicle_class,
          passengers: vehicle.passengers
        }
      })
    }

    componentDidMount() {
      fetch('https://swapi.co/api/people/')
      .then(res => res.json())
      .then(data => this.fetchPlanetInfoForPerson(data.results))
      .then(personInfo => this.setState({people: personInfo.flat()}))
      .then(fetch('https://swapi.co/api/planets/')
      .then(res => res.json())
      .then(data => this.fetchPlanetInfo(data.results))
      .then(planetInfo => this.setState({planets: planetInfo})))
      .then(fetch('https://swapi.co/api/vehicles/')
      .then(res => res.json())
      .then(data => this.identifyVehicleInfo(data.results))
      .then(vehicleInfo => this.setState({vehicles: vehicleInfo})))
      .catch(err => console.log(err))
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

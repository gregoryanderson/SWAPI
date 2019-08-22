import React, { Component }from 'react';
import Main from '../Main/Main';
import People from '../People/People';
import Planets from '../Planets/Planets';
import Vehicles from '../Vehicles/Vehicles';
import Card from '../Card/Card';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      planets: [],
      vehicles: [],
      hasError: '',
      film: '',
      isLoaded: false
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
      .then(vehicleInfo => this.setState({vehicles: vehicleInfo, isLoaded: true})))
      .catch(err => console.log(err))
  }

  render() {
    return (
    <div>
      {/* {this.state.isLoaded && <button className="button--enter">ENTER</button> }  */}
      <nav>
        <h1>S W A P I - B O X</h1>
        <ul>
          <li>PEOPLE</li>
          <li>PLANETS</li>
          <li>VEHICLES</li>
        </ul>
      </nav>
      <section className="app__section">
        {this.state.isLoaded && <Main people={this.state.people} vehicles={this.state.vehicles} planets={this.state.planets}/>}
      </section>
    </div>
    )
  }
}

export default App;

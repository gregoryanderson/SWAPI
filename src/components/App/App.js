import React, { Component }from 'react';
import { Route, NavLink } from 'react-router-dom'
import Card from '../Card/Card';
import Scroll from '../Scroll/Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      planets: [],
      vehicles: [],
      hasError: '',
      films: [],
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
      const planetPromises = planetInfo.map(planet => {
        const residents = planet.residents.map(resident => {
          return fetch(resident)
            .then(res => res.json())
            .then(data => data.name)
            .catch(err => console.log(err))
          })
        return Promise.all(residents)
          .then(names => (
            {
            name: planet.name,
            terrain: planet.terrain,
            population: planet.population,
            climate: planet.climate,
            residents: names
           }))
      })
      return Promise.all(planetPromises)
    }

    identifyVehicleInfo = (vehicleInfo) => {
      return vehicleInfo.map(vehicle => {
        return {
          name: vehicle.name,
          model: vehicle.model,
          vehicleClass: vehicle.vehicle_class,
          passengers: vehicle.passengers
        }
      })
    }

    componentDidMount() {
      fetch('https://swapi.co/api/films/')
        .then(res => res.json())
        .then(data => this.setState({films: data.results}))
        .then(fetch('https://swapi.co/api/people/')
        .then(res => res.json())
        .then(data => this.fetchPlanetInfoForPerson(data.results))
        .then(personInfo => this.setState({people: personInfo.flat()})))
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
    console.log(this.state.films)
    return (
      <main className="App">
        <header className="header">
          <h1>S W A P I - B O X</h1>
          <NavLink to="/people" className="nav">PEOPLE</NavLink>
          <NavLink to="/planets" className="nav">PLANETS</NavLink>
          <NavLink to="/vehicles" className="nav">VEHICLES</NavLink>
        </header>
        {!!this.state.films.length && <Scroll film={this.state.films}/>}
        <section>
          <Route path="/people" render={ () => <Card data={this.state.people}/> } />
          <Route path="/planets" render={ () => <Card data={this.state.planets}/> } />
          <Route path="/vehicles" render={ () => <Card data={this.state.vehicles}/> } />
        </section>
      </main>
    )
  }

  }


  //     {/* {this.state.isLoaded && <button className="button--enter">ENTER</button> }  */}
  //    
  //       {this.state.isLoaded && <Main people={this.state.people} vehicles={this.state.vehicles} planets={this.state.planets}/>}
 


export default App;

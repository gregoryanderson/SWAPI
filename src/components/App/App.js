import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import Card from "../Card/Card";
import Scroll from "../Scroll/Scroll";
import PropTypes from 'prop-types'
import SelectedCard from "../SelectedCard/SelectedCard";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      planets: [],
      vehicles: [],
      hasError: "",
      films: [],
      isLoaded: false,
      favorites: [],
      isFavorite: false
    };
  }

  fetchPlanetInfoForPerson = peopleInfo => {
    const promises = peopleInfo.map(person => {
      return fetch(person.homeworld)
        .then(res => res.json())
        .then(data => ({
          ...data,
          personName: person.name,
          personSpecies: person.species
        }))
        .then(personAndWorldData =>
          this.fetchSpeciesInfoForPerson(personAndWorldData)
        )
        .catch(err => console.log(err));
    });
    return Promise.all(promises);
  };

  fetchSpeciesInfoForPerson = personWorldInfo => {
    const promises = personWorldInfo.personSpecies.map(species => {
      return fetch(personWorldInfo.personSpecies[0])
        .then(res => res.json())
        .then(data => ({
          name: personWorldInfo.personName,
          personSpecies: data.name,
          personPlanet: personWorldInfo.name,
          personPlanetPopulation: personWorldInfo.population,
          personLanguage: data.language,
          type: 'people',
          isFavorite: false
        }))
        .catch(err => console.log(err));
    });
    return Promise.all(promises);
  };

  fetchPlanetInfo = planetInfo => {
    const planetPromises = planetInfo.map(planet => {
      const residents = planet.residents.map(resident => {
        return fetch(resident)
          .then(res => res.json())
          .then(data => data.name)
          .catch(err => console.log(err));
      });
      return Promise.all(residents).then(names => ({
        name: planet.name,
        terrain: planet.terrain,
        population: planet.population,
        climate: planet.climate,
        residents: names,
        type: 'planets',
        isFavorite: false
      }));
    });
    return Promise.all(planetPromises);
  };

  identifyVehicleInfo = vehicleInfo => {
    return vehicleInfo.map(vehicle => {
      return {
        name: vehicle.name,
        model: vehicle.model,
        vehicleClass: vehicle.vehicle_class,
        passengers: vehicle.passengers,
        type: 'vehicles',
        isFavorite: false
      };
    });
  };

  componentDidMount() {
    fetch("https://swapi.co/api/films/")
      .then(res => res.json())
      .then(data => this.setState({ films: data.results }))
      .then(
        fetch("https://swapi.co/api/people/")
          .then(res => res.json())
          .then(data => this.fetchPlanetInfoForPerson(data.results))
          .then(personInfo => this.setState({ people: personInfo.flat() }))
      )
      .then(
        fetch("https://swapi.co/api/planets/")
          .then(res => res.json())
          .then(data => this.fetchPlanetInfo(data.results))
          .then(planetInfo => this.setState({ planets: planetInfo }))
      )
      .then(
        fetch("https://swapi.co/api/vehicles/")
          .then(res => res.json())
          .then(data => this.identifyVehicleInfo(data.results))
          .then(vehicleInfo =>
            this.setState({ vehicles: vehicleInfo, isLoaded: true })
          )
      )
      .catch(err => console.log(err));
  }

  addFavorite = (id, type) => {
    const favoritedCard = this.state[type].find(card => id.name == card.name);
    favoritedCard.isFavorite = !favoritedCard.isFavorite;
    if(favoritedCard.isFavorite === true){
      this.setState({ favorites: [...this.state.favorites, favoritedCard] });
    } else {
      const filteredFavorites = this.state.favorites.filter(card => card.name !== favoritedCard.name)
      this.setState({ favorites: filteredFavorites})
    }
  };

  render() {
    return (
      <main className="app">
        <header className="nav__header">
          <h1 className="nav__h1">S W A P I - B O X</h1>
          <section className="nav__section--links">
            <NavLink to="/home" className="nav__link" activeClassName="selected">
              HOME
            </NavLink>
            <NavLink to="/people" className="nav__link" activeClassName="selected">
              PEOPLE
            </NavLink>
            <NavLink to="/planets" className="nav__link" activeClassName="selected">
              PLANETS
            </NavLink>
            <NavLink to="/vehicles" className="nav__link" activeClassName="selected">
              VEHICLES
            </NavLink>
            <div className="nav__div--favorites">
              <NavLink to="/favorites" className="nav__link favorite__link" activeClassName="selected">
                FAVORITES <span>{this.state.favorites.length}</span>
              </NavLink>
              <img
                className="favorite__image"
                src="http://images2.wikia.nocookie.net/__cb20080228205028/starwars/images/thumb/7/71/Redstarbird.svg/1600px-Redstarbird.svg.png"
                height="35px"
                width="35px"
              />
            </div>
          </section>
        </header>
        {!!this.state.films.length && <Scroll film={this.state.films} />}
        <section className="app__section">
          <Route
            exact
            path="/people"
            render={() => (
              <Card
                data={this.state.people}
                addFavorite={this.addFavorite}
                type={"people"}
              />
            )}
          />
          <Route
            exact
            path="/planets"
            render={() => (
              <Card
                data={this.state.planets}
                addFavorite={this.addFavorite}
                type={"planets"}
              />
            )}
          />
          <Route
            exact
            path="/vehicles"
            render={() => (
              <Card
                data={this.state.vehicles}
                addFavorite={this.addFavorite}
                type={"vehicles"}
              />
            )}
          />
          <Route
            exact
            path="/favorites"
            render={() => (
              <Card
                data={this.state.favorites}
                addFavorite={this.addFavorite}
                type={"favorites"}
              />
            )}
          />
        </section>
        <section className="selected__section">
          <Route
            path="/people/:id"
            render={({ match }) => {
              const foundPerson = this.state.people.find(
                person => person.name === match.params.id
              );
              return (
                <SelectedCard
                  data={foundPerson}
                />
              );
            }}
          />
          <Route
            path="/vehicles/:id"
            render={({ match }) => {
              const foundVehicle = this.state.vehicles.find(
                vehicle => vehicle.name === match.params.id
                );
                return (
                  <SelectedCard
                  data={foundVehicle}
                />
              );
            }}
          />
          <Route
            path="/planets/:id"
            render={({ match }) => {
              const foundPlanet = this.state.planets.find(
                planet => planet.name === match.params.id
                );
              return (
                <SelectedCard
                  data={foundPlanet}
                />
              );
            }}
          />
        </section>
      </main>
    );
  }
}

//     {/* {this.state.isLoaded && <button className="button--enter">ENTER</button> }  */}
//
//       {this.state.isLoaded && <Main people={this.state.people} vehicles={this.state.vehicles} planets={this.state.planets}/>}

export default App;


App.propTypes = {
}
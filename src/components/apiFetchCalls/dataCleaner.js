import fetchCalls from './apiFetchCalls';

const dataCleaner = (data) => {

    console.log('unclean', data)
    // console.log('this is the type', type)


    
    const getVehicles = () => {
        if(data.dataType === 'vehicles'){
            // console.log('here are some vehicles', data)
            return data.results.map(vehicle => {
                return {
                    name: vehicle.name,
                    model: vehicle.model,
                    vehicleClass: vehicle.vehicle_class,
                    passengers: vehicle.passengers,
                    type: 'vehicles',
                    isFavorite: false
                }
            })
        }
    }

    const getFilms = () => {
        if(data.dataType === 'films'){
            // console.log('here are some films', data)
            return data.results.map(film => {
                return {
                    name: film.title,
                    year: film.release_date,
                    scroll: film.opening_crawl,
                    type: 'films',
                    isFavorite: false
                }
            }) 
        }
    }

    return {films: getFilms(), vehicles: getVehicles()}
    // const vehicles = getVehicles()
    // console.log(vehicles)
    // const films = getFilms()
    // console.log(films)
    // const allData = [vehicles, films]
    // console.log('prove it', allData)
    // fetchPlanetInfoForPerson = peopleInfo => {
    //     const promises = peopleInfo.map(person => {
    //       return fetch(person.homeworld)
    //         .then(res => res.json())
    //         .then(data => ({
    //           ...data,
    //           personName: person.name,
    //           personSpecies: person.species
    //         }))
    //         .then(personAndWorldData =>
    //           this.fetchSpeciesInfoForPerson(personAndWorldData)
    //         )
    //         .catch(err => console.log(err));
    //     });
    //     return Promise.all(promises);
    //   };
    
    //   fetchSpeciesInfoForPerson = personWorldInfo => {
    //     const promises = personWorldInfo.personSpecies.map(species => {
    //       return fetch(personWorldInfo.personSpecies[0])
    //         .then(res => res.json())
    //         .then(data => ({
    //           name: personWorldInfo.personName,
    //           personSpecies: data.name,
    //           personPlanet: personWorldInfo.name,
    //           personPlanetPopulation: personWorldInfo.population,
    //           personLanguage: data.language,
    //           type: 'people',
    //           isFavorite: false
    //         }))
    //         .catch(err => console.log(err));
    //       });
    //     return Promise.all(promises);
    //   };
    
    //   fetchPlanetInfo = planetInfo => {
    //     const planetPromises = planetInfo.map(planet => {
    //       const residents = planet.residents.map(resident => {
    //         return fetch(resident)
    //           .then(res => res.json())
    //           .then(data => data.name)
    //           .catch(err => console.log(err));
    //       });
    //       return Promise.all(residents).then(names => ({
    //         name: planet.name,
    //         terrain: planet.terrain,
    //         population: planet.population,
    //         climate: planet.climate,
    //         residents: names,
    //         type: 'planets',
    //         isFavorite: false
    //       }));
    //     });
    //     return Promise.all(planetPromises);
    //   };
    
    //   identifyVehicleInfo = vehicleInfo => {
    //     return vehicleInfo.map(vehicle => {
    //       return {
    //         name: vehicle.name,
    //         model: vehicle.model,
    //         vehicleClass: vehicle.vehicle_class,
    //         passengers: vehicle.passengers,
    //         type: 'vehicles',
    //         isFavorite: false
    //       };
    //     });
    //   };
    // getVehicles()
}

export default dataCleaner;
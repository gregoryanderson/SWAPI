import fetchCalls from './apiFetchCalls';
import fetchSpeciesInfoForPerson from './fetchSpeciesInfoForPerson.js';
import fetchPlanetInfoForPerson from './fetchPlanetInforForPerson.js';

const dataCleaner = (data) => {

    if(data.dataType === 'vehicles'){
        const vehicleData = data.results.map(vehicle => {
            return {
                name: vehicle.name,
                model: vehicle.model,
                vehicleClass: vehicle.vehicle_class,
                passengers: vehicle.passengers,
                type: 'vehicles',
                isFavorite: false
            }
        })
        return {...data, results: vehicleData}
    }

    if(data.dataType === 'films'){
        const filmData = data.results.map(film => {
            return {
                name: film.title,
                year: film.release_date,
                scroll: film.opening_crawl,
                type: 'films',
                isFavorite: false
            }
        })
        return {...data, results: filmData} 
    }

    if(data.dataType === 'people'){
        const peopleData = data.results.map(person => {
            const personPlanet = fetchPlanetInfoForPerson(person.homeworld)
                .then(data => data.name)
            // const personSpecies = fetchSpeciesInfoForPerson(person.species)
            //     .then(data => )
            return Promise.all([personPlanet])
                .then(final => {          
                        return  {
                    name: person.name,
                    language: person.language,
                    homeWorld: final,
                    dataType: 'people'
                }
            })
        })
        return {...data, results: peopleData}
    }

    // if(data.dataType === 'people'){
    //     const filmData = data.results.map(person => {
    //         return {
    //             name: film.title,
    //             year: film.release_date,
    //             scroll: film.opening_crawl,
    //             type: 'films',
    //             isFavorite: false
    //         }
    //     })
    //     return {...data, results: filmData} 
    // }
}

export default dataCleaner;
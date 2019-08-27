export const fetchData = () => {
    const films = fetch("https://swapi.co/api/films/")
        .then(response => {
            console.log(response)
            if(!response.ok){
                throw Error('Error fetching films')
            } 
            return response.json()
        }).then(allData => {
            return {
                ...allData,
                type:'films'
            }
        }).catch(err => {
            throw Error(err.message)
        })
    
    const vehicles = fetch("https://swapi.co/api/vehicles/")
        .then(response => {
            console.log(response)
            if(!response.ok){
                throw Error('Error fetching vehicles')
            } 
            return response.json()
        }).then(allData => {
            return {
                ...allData,
                type:'vehicles'
            }
        }).catch(err => {
            throw Error(err.message)
        })
    
    const people = fetch("https://swapi.co/api/people/")
        .then(response => {
            console.log(response)
            if(!response.ok){
                throw Error('Error fetching people')
            } 
            return response.json()
        }).then(allData => {
            return {
                ...allData,
                type:'people'
            }
        }).catch(err => {
            throw Error(err.message)
        })

    const planets = fetch("https://swapi.co/api/planets/")
        .then(response => {
            console.log('planets', response)
            if(!response.ok){
                throw Error('Error fetching planets')
            } 
            return response.json()
        }).then(allData => {
            return {
                ...allData,
                type:'planets'
            }
        }).catch(err => {
            throw Error(err.message)
        })

    return Promise.all([films, vehicles, people, planets])
    }



// fetch("https://swapi.co/api/films/")
// .then(res => res.json())
// .then(data => this.setState({ films: data.results }))
// .then(
//   fetch("https://swapi.co/api/people/")
//     .then(res => res.json())
//     .then(data => this.fetchPlanetInfoForPerson(data.results))
//     .then(personInfo => this.setState({ people: personInfo.flat() }))
// )
// .then(
//   fetch("https://swapi.co/api/planets/")
//     .then(res => res.json())
//     .then(data => this.fetchPlanetInfo(data.results))
//     .then(planetInfo => this.setState({ planets: planetInfo }))
// )
// .then(
//   fetch("https://swapi.co/api/vehicles/")
//     .then(res => res.json())
//     .then(data => this.identifyVehicleInfo(data.results))
//     .then(vehicleInfo =>
//       this.setState({ vehicles: vehicleInfo, isLoaded: true })
//     )
//     )
//     .catch(err => console.log(err));
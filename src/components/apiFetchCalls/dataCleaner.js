import fetchCalls from './apiFetchCalls';

const dataCleaner = (data) => {
    console.log('unclean', data)

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
}

export default dataCleaner;
export const fetchPlanetInfoForPerson = data => {

    return fetch(data)
    .then(res => res.json())
    // .then(data => data.name)
    // .then(species => species)
}

export default fetchPlanetInfoForPerson;
import dataCleaner from "./dataCleaner";

const fetchCalls = () => {
    console.log('in fetch calls')
  // const fetchFilms = fetch("https://swapi.co/api/films/")
  //     .then(res => res.json())
  //     .then(data => dataCleaner(data))
  //     .catch(err => console.log(err))

  // const fetchPeople = fetch("https://swapi.co/api/people/")
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  //     .catch(err => console.log(err))

  // const fetchPlanets = fetch("https://swapi.co/api/planets/")
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  //     .then(err => console.log(err))

  const url = "https://swapi.co/api/";
  const types = ["films", "people", "planets", "vehicles"];

  const foundFetches = () => {
      console.log('linked')
    return types.map(type => {
      return fetch(`${url}${type}`)
        .then(res => res.json())
        .then(data => dataCleaner({ ...data, dataType: type }))
        .then(cleanData => console.log('back from the cleaners', cleanData))
        .catch(err => console.log(err));
    });
  };

  // fetch(`${url}${type[3]}`)
  //     .then(res => res.json())
  //     .then(data => dataCleaner(data, type))
  //     .catch(err => console.log(err))

  return Promise.all([foundFetches()]);
  // fetchFilms, fetchPeople, fetchPlanets,
};

export default fetchCalls;

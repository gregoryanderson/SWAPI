import dataCleaner from "./dataCleaner";

export const fetchCalls = () => {
    const url = "https://swapi.co/api/";
    const types = ["films", "vehicles","people"];
    const allData = types.map(type => {
      return fetch(`${url}${type}`)
        .then(res => res.json())
        .then(data => ({ ...data, dataType: type }))
        .then(cleanThatData => dataCleaner(cleanThatData))
    });

  return Promise.all(allData);
};


export default fetchCalls;

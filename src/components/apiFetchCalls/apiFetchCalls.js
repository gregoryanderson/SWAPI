import dataCleaner from "./dataCleaner";

const fetchCalls = () => {
    const url = "https://swapi.co/api/";
    const types = ["films", "vehicles"];
    const allData = types.map(type => {
      return fetch(`${url}${type}`)
        .then(res => res.json())
        .then(data => ({ ...data, dataType: type }))
        .then(cleanThatData => dataCleaner(cleanThatData))
        // .then(maybe => console.log('back from the cleaners', maybe))
    });

  return Promise.all(allData);
};

export default fetchCalls;

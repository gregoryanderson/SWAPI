import dataCleaner from "./dataCleaner";

export const fetchCalls = () => {
    const url = "https://swapi.co/api/";
    const types = ["films", "vehicles","people"];
    const allData = types.map(type => {
      return fetch(`${url}${type}`)
      .then(response => {
          if(!response.ok){
              throw Error('Error fetching data')
          }
          return response.json()
        }).catch(error => {
          throw Error(error.message)
        })

     
      // .then(res => res.json())
        // .then(data => ({ ...data, dataType: type }))
        // .then(cleanThatData => dataCleaner(cleanThatData))
        // .catch(err => console.log(err))
    });

  return Promise.all(allData);
};


export default fetchCalls;

import React from 'react'

const Scroll = (props) => {
  const randomNumber = Math.floor(Math.random() * props.film.length)
  const actualFilm = props.film[randomNumber]
  console.log(actualFilm)
  return (
      <>
        <marquee behavior="scroll" direction="left">{actualFilm.opening_crawl}{actualFilm.title}{actualFilm.release_date}</marquee>
      </>
  )
}

// characters: (18) ["https://swapi.co/api/people/1/", "https://swapi.co/api/people/2/", "https://swapi.co/api/people/3/", "https://swapi.co/api/people/4/", "https://swapi.co/api/people/5/", "https://swapi.co/api/people/6/", "https://swapi.co/api/people/7/", "https://swapi.co/api/people/8/", "https://swapi.co/api/people/9/", "https://swapi.co/api/people/10/", "https://swapi.co/api/people/12/", "https://swapi.co/api/people/13/", "https://swapi.co/api/people/14/", "https://swapi.co/api/people/15/", "https://swapi.co/api/people/16/", "https://swapi.co/api/people/18/", "https://swapi.co/api/people/19/", "https://swapi.co/api/people/81/"]
// created: "2014-12-10T14:23:31.880000Z"
// director: "George Lucas"
// edited: "2015-04-11T09:46:52.774897Z"
// episode_id: 4
// opening_crawl: "It is a period of civil war.

// planets: (3) ["https://swapi.co/api/planets/2/", "https://swapi.co/api/planets/3/", "https://swapi.co/api/planets/1/"]
// producer: "Gary Kurtz, Rick McCallum"
// release_date: "1977-05-25"
// species: (5) ["https://swapi.co/api/species/5/", "https://swapi.co/api/species/3/", "https://swapi.co/api/species/2/", "https://swapi.co/api/species/1/", "https://swapi.co/api/species/4/"]
// starships: (8) ["https://swapi.co/api/starships/2/", "https://swapi.co/api/starships/3/", "https://swapi.co/api/starships/5/", "https://swapi.co/api/starships/9/", "https://swapi.co/api/starships/10/", "https://swapi.co/api/starships/11/", "https://swapi.co/api/starships/12/", "https://swapi.co/api/starships/13/"]
// title: "A New Hope"
// url: "https://swapi.co/api/films/1/"
// vehicles: (4) ["https://swapi.co/api/vehicles/4/", "https://swapi.co/api/vehicles/6/", "https://swapi.co/api/vehicles/7/", "https://swapi.co/api/vehicles/8/"]


export default Scroll

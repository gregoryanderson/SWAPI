import React from 'react';
import './Card.css';


const Card = ({ data }) => {
    console.log(data)
    const displayCards = data.map(card => {
        const {personLanguage, personName, personPlanet, personPlanetPopulation, personSpecies, vehicleClass, model, name, passengers, climate, population, terrain, residents} = card;
        const displayResidents = residents.map(resident => {
          return <p className="resident">{resident || null}</p>
        })
        return (
        <article className="card__article">
            <header className="card__header">
                <h3>{personName || null }</h3>
                <h3>{name || null}</h3>
                <img src='http://images2.wikia.nocookie.net/__cb20080228205028/starwars/images/thumb/7/71/Redstarbird.svg/1600px-Redstarbird.svg.png' height='40px' width='40px' alt='Star Wars Favorite Button'/>
            </header>
            <div>
                <p>{personPlanet || null}</p>
                <p>{personSpecies || null}</p>
                <p>{personPlanetPopulation || null}</p>
                <p>{personLanguage || null}</p>
                <p>{model || null }</p>
                <p>{vehicleClass || null}</p>
                <p>{passengers || null}</p>
                <p>{climate || null}</p>
                <p>{population || null}</p>
                <p>{terrain || null}</p>
                {displayResidents}
            </div>
        </article>
    )
  })
  return (
    <>
        {displayCards}
    </>
  )
}


// function Card (props) {
//     console.log('card', props)
//     return (
//         <article className="card__article">
//             <header className="card__header">
//                 <h3>{props.name}</h3>
//                 <img src='http://images2.wikia.nocookie.net/__cb20080228205028/starwars/images/thumb/7/71/Redstarbird.svg/1600px-Redstarbird.svg.png' height='40px' width='40px' alt='Star Wars Favorite Button'/>
//             </header>
//             <div>
//                 <p>{props.homeworld || null}</p>
//                 <p>{props.species || null}</p>
//                 <p>{props.population || null}</p>
//             </div>
//         </article>
//     )
// }


export default Card;

//think about fragments
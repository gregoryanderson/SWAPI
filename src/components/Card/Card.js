import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';



const Card = ({ data, addFavorite, type }) => {
    const inactiveFavoritesImage = 'https://vignette.wikia.nocookie.net/starwars/images/0/0e/Whitestarbird.svg/revision/latest?cb=20080310230901';
    const activeFavoritesImage = 'http://images2.wikia.nocookie.net/__cb20080228205028/starwars/images/thumb/7/71/Redstarbird.svg/1600px-Redstarbird.svg.png';
    const displayCards = data.map(card => {
      console.log('pear', card.isFavorite);
      const {personLanguage, name, personPlanet, personPlanetPopulation, personSpecies, vehicleClass, model, passengers, climate, population, terrain, residents} = card;
      // if (residents) {const displayResidents = residents.map(resident => {
        //   return <p className="resident">{resident || null}</p>
        // })}
        return (
          <article className="card__article" id={name} type={type}>
            <header className="card__header">
                <h3 className="card__h3">{name || null}</h3>
                <img src={card.isFavorite ? inactiveFavoritesImage : activeFavoritesImage} height='40px' width='40px' alt='Star Wars Favorite Button' onClick={() => addFavorite({name}, type)}/>
            </header>
            <div className="card__div">
              <p className="card__p">{personPlanet || null}</p>
              <p className="card__p">{personSpecies || null}</p>
              <p className="card__p">{personPlanetPopulation || null}</p>
              <p className="card__p">{personLanguage || null}</p>
              <p className="card__p">{model || null }</p>
              <p className="card__p">{vehicleClass || null}</p>
              <p className="card__p">{passengers || null}</p>
              <p className="card__p">{climate || null}</p>
              <p className="card__p">{population || null}</p>
              <p className="card__p">{terrain || null}</p>
              <p className="card__p">{residents || null}</p>
            </div>
            <div className="card__div--button">
              <Link to={`/${type}/${name}`} className="card__link">
                <button className="card__button">Click for More!</button>
              </Link>
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
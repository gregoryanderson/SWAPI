import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import './Card.css';

const Card = ({ data, addFavorite, type }) => {
  const inactiveFavoritesImage = 'https://vignette.wikia.nocookie.net/starwars/images/0/0e/Whitestarbird.svg/revision/latest?cb=20080310230901';
  const activeFavoritesImage = 'http://images2.wikia.nocookie.net/__cb20080228205028/starwars/images/thumb/7/71/Redstarbird.svg/1600px-Redstarbird.svg.png';
  if (type === "favorites" && data.length === 0){ 
   return (<h1 className="favorite__header">Choose a favorite by picking on a card's red badge</h1>)
  } else {
  const displayCards = data.map(card => {
    const {personLanguage, name, personPlanet, personPlanetPopulation, personSpecies, vehicleClass, model, passengers, climate, population, terrain, residents} = card;
      // if (residents) {const displayResidents = residents.map(resident => {
        //   return <p className="resident">{resident || null}</p>
        // })}
    return (
      <article className="card__article" id={name} type={type}>
        <header className="card__header">
          <h3 className="card__h3">{name || null}</h3>
          <img className="card__button-favorite" src={card.isFavorite ? inactiveFavoritesImage : activeFavoritesImage} height='40px' width='40px' alt='Star Wars Favorite Button' onClick={() => addFavorite({name}, type)}/>
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
  )}
}

export default Card;

Card.propTypes = {
  addFavorite: PropTypes.func,
  data: PropTypes.array,
  type: PropTypes.string
}
import React from 'react';
import './Card.css';


function Card (props) {
    console.log('card', props)
    return (
        <article className="card__article">
            <header className="card__header">
                <h3>{props.name}</h3>
                <img src='http://images2.wikia.nocookie.net/__cb20080228205028/starwars/images/thumb/7/71/Redstarbird.svg/1600px-Redstarbird.svg.png' height='40px' width='40px' alt='Star Wars Favorite Button'/>
            </header>
            <div>
                <p>{props.homeworld || null}</p>
                <p>{props.species || null}</p>
                <p>{props.population || null}</p>
            </div>
        </article>
    )
}


export default Card;

//think about fragments
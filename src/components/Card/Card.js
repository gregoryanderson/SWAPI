import React from 'react';
import './Card.css';


function Card (props) {
    console.log('card', props)
    return (
        <section>
            <header>
                <h3>{props.name}</h3>
                <img src='https://i.pinimg.com/originals/72/fb/ab/72fbabbfb421aa8755aecbf8306dfda7.png' height='20px' width='20px' alt='Star Wars Favorite Button'/>
            </header>
            <div>
                <p>{props.homeworld || null}</p>
                <p>{props.species || null}</p>
                <p>{props.population || null}</p>
            </div>
        </section>
    )
}


export default Card;

//think about fragments
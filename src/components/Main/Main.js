import React from 'react';
import './Main.css';
import Card from '../Card/Card';

const Main = props => {
    console.log('main', props)
    const allCards = props.people.map(item => {
        return <Card 
            name= {item.personName}
            homeworld={item.personPlanet}
            species = {item.personSpecies}
            population = {item.personPlanetPopulation}
        />
    })
    return (
        <section>
            {allCards}
        </section>
    )
}

export default Main;
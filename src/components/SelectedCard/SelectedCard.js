import React from 'react';
import { Link } from 'react-router-dom';
import './SelectedCard.css';
import PropTypes from 'prop-types'

const SelectedCard = ({ data }) => {
  const {name, type} = data
    return (
      <div className="selected__div">
        <Link to={`/${type}`} className='back-btn'>◀ back</Link>
        <header className="selected__header">
          <h3 className="selected__h3">{name}</h3>
          <img src='http://images2.wikia.nocookie.net/__cb20080228205028/starwars/images/thumb/7/71/Redstarbird.svg/1600px-Redstarbird.svg.png' height='40px' width='40px' alt='Star Wars Favorite Button'/>
        </header>
      </div>
    )
  }

export default SelectedCard;

SelectedCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string, 
  type: PropTypes.string
}
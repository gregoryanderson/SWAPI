import React from 'react';
import PropTypes from 'prop-types'

const Scroll = (props) => {
  const randomNumber = Math.floor(Math.random() * props.film.length)
  const actualFilm = props.film[randomNumber]
  return (
      <>
        <marquee behavior="scroll" direction="left">{actualFilm.opening_crawl}{actualFilm.title}{actualFilm.release_date}</marquee>
      </>
  )
}

export default Scroll

Scroll.propTypes = {
  film: PropTypes.array
}

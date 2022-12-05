import React from 'react'
import './styles/locationInfo.css'

const LocationInfo = ({ ubication }) => {
  return (
    <article className='content__info-location'>
      <h2 className='location__title'>{ubication?.name}</h2>
      <ul className='location__list'>
        <li>
          <span className='list__title list__title-location'>Type</span>
          <span>{ubication?.type}</span>
        </li>
        <li>
          <span className='list__title list__title-location'>Dimension</span>
          <span>{ubication?.dimension}</span>
        </li>
        <li>
          <span className='list__title list__title-location'>Population</span>
          <span>{ubication?.residents.length}</span>
        </li>
      </ul>
    </article>
  )
}

export default LocationInfo
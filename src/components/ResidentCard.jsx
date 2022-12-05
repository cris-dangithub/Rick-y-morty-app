import React from 'react'
import useGetResident from '../hooks/useGetResident'
import './styles/residentCard.css'

const ResidentCard = ({ residentURL }) => {

  const { residentInfo } = useGetResident(residentURL)
  return (
    <article className='card'>
      <header className='card__header'>
        <img src={residentInfo?.image} alt="" />
        <div className="card__header-status">
          <div className={`status__circle ${residentInfo?.status}`}></div>
          <span className='status__text'>{residentInfo?.status}</span>
        </div>
      </header>
      <section className='card__info'>
        <h2 className='card__info-name'>{residentInfo?.name}</h2>
        <ul className='card__info-list'>
          <li>
            <span className='list__title'>Specie</span>
            <span>{residentInfo?.species}</span>
          </li>
          <li>
            <span className='list__title'>Origin: </span>
            <span>{residentInfo?.origin.name}</span>
          </li>
          <li>
            <span className='list__title'>Episodes where appear: </span>
            <span>{residentInfo?.episode.length}</span>
          </li>
        </ul>
      </section>
    </article>
  )
}

export default ResidentCard
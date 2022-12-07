import { useEffect } from 'react';
import './App.css'
import LocationInfo from './components/LocationInfo';
import ResidentCard from './components/ResidentCard';
import useFetch from './hooks/useFetch'
import config_particles from './assets/json/config_particles.json'
import useAddWindowEvents from './hooks/useAddWindowEvents';

function App() {

  useEffect(() => {
    particlesJS("particles-js", config_particles)
    /*  window.addEventListener('load') */
    const header = document.querySelector('.App__header')
    console.log({header});
    const particles = document.querySelector('.particles-js')
    const overlay = document.querySelector('.overlay')
    useAddWindowEvents(header, particles, overlay)
  }, [])

  let { ubication, handleSubmit } = useFetch()
  return (
    <div className="App">
      <div className="backgrounds">
        <div className="particles-js" id="particles-js"></div>
        <div className="overlay"></div>
      </div>
      <header className='flexItemsCentered App__header'>

        <section className="App__header-content flexItemsAround">
          <img src="https://www.freepnglogos.com/uploads/rick-and-morty-png/list-rick-and-morty-episodes-wikipedia-24.png" alt="rick y morty" />
          <div className="content__info">
            <form onSubmit={handleSubmit} className="content__info-form">
              <input
                type="text"
                id="inputText"
                className='form__input'
                placeholder='Ingresa el ID de la ubicación'
              />
              <button className='form__button'>Search</button>
            </form>
            <LocationInfo
              ubication={ubication}
            />
          </div>
          <a className="content__arrowDown" href='#cards'>
            <i className="fa-solid fa-angle-down"></i>
            <i className="fa-solid fa-angle-down arrowDown"></i>
          </a>
        </section>
      </header>
      <div className="residents-container" id='cards'>
        {
          ubication?.residents.map(residentURL => (
            <ResidentCard
              key={residentURL}
              residentURL={residentURL}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App

import { useEffect } from 'react';
import './App.css'
import LocationInfo from './components/LocationInfo';
import ResidentCard from './components/ResidentCard';
import useFetch from './hooks/useFetch'

function App() {
  let { ubication, handleSubmit } = useFetch()
  return (
    <div className="App" id="particles-js">
      <header className='App__header flexItemsCentered'>
        <div className="overlay"></div>
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

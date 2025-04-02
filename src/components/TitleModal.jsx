import React, { useContext } from 'react'

import Button from './Button'

import { PlanetsContext } from '../../context/PlanetsContext'

const TitleModal = () => {
    const { planets, setSelectedPlanet } = useContext(PlanetsContext)

    const handleButtonClick = () => {
        const earth = planets.find((planet) => 
        (planet.name === "Earth"))
        setSelectedPlanet(earth) 
    }

  return (
    <div className='@ container flex flex-col w-3xl h-screen items-center justify-center'>
        <h1 className='h1 text-white text-center mb-6'>WELCOME TO THE PLANETS</h1>
        <p className='h2 text-white/50 text-center'>This site is designed for you to get to know the planets in our solar system. Have fun!</p>
      <button 
          className='h3 uppercase w-[300px] text-white border-1 border-white/25 px-8 py-4 mt-6 hover:bg-[var(--color-earth)]'
          onClick={() => handleButtonClick()}
          style={{cursor: 'pointer'}}
          >Lets Go!</button>
    </div>
  )
}

export default TitleModal
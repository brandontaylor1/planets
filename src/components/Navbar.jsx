import React, { useContext } from 'react'
import { PlanetsContext } from '../../context/PlanetsContext.jsx'

const Navbar = () => {

const { planets, setSelectedPlanet } = useContext(PlanetsContext)

  return (
        <nav className='@container w-full h-[5vh] flex flex-row justify-between items-center px-4 text-[var(--color-primary-white)]'>
            <h1 className='h2 uppercase '>The Planets</h1>
            <ul className='flex flex-row gap-6'>
                {planets.map((planet) => (
                    <li key={planet.name}
                        className='h3 uppercase'
                        onClick={() => setSelectedPlanet(planet)}
                        style={{cursor: 'pointer'}}
                        >
                        {planet.name}
                    </li>
                ))}
            </ul>
        </nav>
  )
}

export default Navbar   
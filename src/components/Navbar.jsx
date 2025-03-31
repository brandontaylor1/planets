import React, { useContext } from 'react'
import { PlanetsContext } from '../../context/PlanetsContext.jsx'

const Navbar = () => {

const { planets, setSelectedPlanet } = useContext(PlanetsContext)

// const planetColors = {
//     mercury: 'var(--color-mercury)',
//     venus: 'var(--color-venus)',
//     earth: 'var(--color-earth)',
//     mars: 'var(--color-mars)',
//     jupiter: 'var(--color-jupiter)',
//     saturn: 'var(--color-saturn)',
//     uranus: 'var(--color-uranus)',
//     neptune: 'var(--color-neptune)',
//   };


  return (
        <nav className='@container w-full h-[5vh] flex flex-row justify-between items-center px-4 text-[var(--color-primary-white)]'>
            <h1 className='h2 uppercase '>The Planets</h1>
            <ul className='flex flex-row gap-6'>
                {planets.map((planet) => {
                    return (
                        <li key={planet.name}
                            className={`h3 uppercase hover:border-t-2 hover:border-t-blue-500]`}
                            onClick={() => setSelectedPlanet(planet)}
                            style={{cursor: 'pointer'}}
                            >
                            {planet.name}
                        </li>
                    )
                })}
            </ul>
        </nav>
  )  
}

export default Navbar   
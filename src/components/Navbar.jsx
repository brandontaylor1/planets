import React, { useContext } from 'react'
import { PlanetsContext } from '../../context/PlanetsContext.jsx'

const Navbar = () => {

const { planets, selectedPlanet, setSelectedPlanet } = useContext(PlanetsContext)

const planetColors = {
    mercury: 'var(--color-mercury)',
    venus: 'var(--color-venus)',
    earth: 'var(--color-earth)',
    mars: 'var(--color-mars)',
    jupiter: 'var(--color-jupiter)',
    saturn: 'var(--color-saturn)',
    uranus: 'var(--color-uranus)',
    neptune: 'var(--color-neptune)',
  };

const earth = planets.find((planet) => planet.name === "Earth")
   
  return (
        <nav className='@container w-full h-[5vh] flex flex-row justify-between items-center px-4 text-[var(--color-primary-white)]'>
            <h1 
                className='h2 uppercase '
                onClick={() => setSelectedPlanet(earth)}
                style={{cursor: 'pointer'}}
                >The Planets</h1>
            <ul className='flex flex-row gap-6'>
                {planets.map((planet) => {
                    const planetColor = planetColors[planet.name.toLowerCase()] || 'var(--color-primary-white)';
                    const isActive = selectedPlanet?.name === planet.name

                    return (
                        <div 
                            key={planet.name}
                            style={{borderTopColor: 'transparent'}}
                            className='h-[100%]'> 

                            <li key={planet.name}         
                                className={`h3 uppercase hover:border-t-3 ${isActive ? 'border-t-3' : 'border-t-0'}`}
                                onClick={() => setSelectedPlanet(planet)}
                                style={{cursor: 'pointer',
                                borderTopColor: isActive ? planetColor : 'transparent'
                                }}

                                onMouseEnter={(e) => (e.target.style.borderTopColor = planetColor)}
                                onMouseLeave={(e) => (e.target.style.borderTopColor = 'none')}

                                
>
                                {planet.name}
                            </li>
                        </div>
                    )
                })}
            </ul>
        </nav>
  )  
}

export default Navbar   
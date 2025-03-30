import React, { useContext } from 'react'
import { PlanetsContext } from '../../context/PlanetsContext'

const Button = ({ number, title }) => {

    const { selectedPlanet } = useContext(PlanetsContext)
    const planetName = selectedPlanet?.name?.toLowerCase();

    const planetColors = {
        mercury: 'hover:bg-[var(--color-mercury)]',
        venus: 'hover:bg-[var(--color-venus)]',
        earth: 'hover:bg-[var(--color-earth)]',
        mars: 'hover:bg-[var(--color-mars)]',
        jupiter: 'hover:bg-[var(--color-jupiter)]',
        saturn: 'hover:bg-[var(--color-saturn)]',
        uranus: 'hover:bg-[var(--color-uranus)]',
        neptune: 'hover:bg-[var(--color-neptune)]',
      };
    
    
      const hoverClass = planetColors[planetName] || '';
    
      const buttonClass = `flex flex-row items-center h3 px-8 border-1 border-white/25 w-[100%] h-[48px] uppercase bg-transparent ${hoverClass}`;
    

  return (
    <button 
        className={buttonClass} 
        onClick={() => console.log('clicked')}
        style={{cursor: 'pointer'}}
        >
        
        <p className='text-white/50 pr-[20px]'>{number}</p>
        {title}
    </button>
  )
}

export default Button
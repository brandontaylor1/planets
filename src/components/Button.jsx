import React, { useContext } from 'react'
import { PlanetsContext } from '../../context/PlanetsContext'

const Button = ({ number, title, onClick, isActive }) => {
  
    const { selectedPlanet } = useContext(PlanetsContext)
    const planetName = selectedPlanet?.name?.toLowerCase();

    const planetColors = {
        mercury: 'bg-[var(--color-mercury)]',
        venus: 'bg-[var(--color-venus)]',
        earth: 'bg-[var(--color-earth)]',
        mars: 'bg-[var(--color-mars)]',
        jupiter: 'bg-[var(--color-jupiter)]',
        saturn: 'bg-[var(--color-saturn)]',
        uranus: 'bg-[var(--color-uranus)]',
        neptune: 'bg-[var(--color-neptune)]',
      };
    
      const planetColor = planetColors[planetName] || 'bg-[var(--color-primary-white)]';

      const buttonClass = `flex flex-row items-center h3 px-8 border-1 border-white/25 w-[100%] h-[48px] uppercase hover:bg-white/50 ${isActive ? planetColor : 'transparent'} transition-all duration-300 ease-in-out`;

  
  return (
    <button 
        className={buttonClass} 
        style={{cursor: 'pointer'}}
        onClick={onClick}>
        <p className='text-white/50 pr-[20px]'>{number}</p>
        {title}
    </button>
  )
}

export default Button
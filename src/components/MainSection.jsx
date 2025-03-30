import React, { useContext}  from 'react'
import { PlanetsContext } from '../../context/PlanetsContext.jsx'

import Button from '../components/Button.jsx'

const MainSection = () => {

    const { selectedPlanet } = useContext(PlanetsContext)

    const planetImage = selectedPlanet && selectedPlanet.images && selectedPlanet.images.planet ? selectedPlanet.images.planet : '';

  return (
    <main className='@container flex flex-row items-center justify-center w-full h-[80vh] text-[var(--color-primary-white)]'>
      <div className='@container w-[60%] h-[100%] flex items-center justify-center'>
        {selectedPlanet && <img src={planetImage} alt={selectedPlanet.name} className='w-2xl h-2xl object-cover' />}
      </div>


      <div className="w-[40%] h-[100%] flex flex-col 
      items-left justify-center gap-4 p-10">
        {selectedPlanet && 
        <h1 className='h1 uppercase'>
            {selectedPlanet.name} </h1>}
        <p className='body text-white/50'>{selectedPlanet && selectedPlanet.overview.content}</p>
        <p className='body'>Source: {selectedPlanet && selectedPlanet.overview.source}</p>
        <div className="btn-container flex flex-col gap-4 w-[100%]">
            <Button number='01'title="Overview" />
            <Button number='02' title="Internal Structure"/>
            <Button number='03' title="Surface Geology"/>
        </div>
      </div>
    </main>
  )
}

export default MainSection  
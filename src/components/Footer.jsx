import React, { useContext } from 'react'

import InfoBox from './InfoBox'
import { PlanetsContext } from '../../context/PlanetsContext'

const Footer = () => {

const { selectedPlanet } = useContext(PlanetsContext)

  return (
    <footer className='w-full text-white'>
        <div className="w-full h-[20vh] flex flex-row">
            <div className="w-[40%] h-[100%] flex flex-col 
            items-left justify-center gap-4 p-10">
                {selectedPlanet && <InfoBox title="Rotation Time" content={selectedPlanet.rotation} />}
            </div>
            <div className="w-[40%] h-[100%] flex flex-col 
            items-left justify-center gap-4 p-10">
                {selectedPlanet && <InfoBox title="Revolution Time" content={selectedPlanet.revolution} />}
            </div>
            <div className="w-[40%] h-[100%] flex flex-col 
            items-left justify-center gap-4 p-10">
                {selectedPlanet && <InfoBox title="Radius" content={selectedPlanet.radius} />}
            </div>
            <div className="w-[40%] h-[100%] flex flex-col 
            items-left justify-center gap-4 p-10">
                {selectedPlanet && <InfoBox title="Average Temp." content={selectedPlanet.temperature} />}
            </div>
        </div>
    
    </footer>
  )
}

export default Footer
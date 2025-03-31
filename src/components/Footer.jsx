import React, { useContext, useState } from 'react'

import InfoBox from './InfoBox'
import { PlanetsContext } from '../../context/PlanetsContext'

const Footer = () => {

const { selectedPlanet } = useContext(PlanetsContext)

// const { temp, setTemp } = useState('') 

// const farenheit = () => {
//     return selectedPlanet.temperature * 9/5 + 32
// }

// const handleButtonClick = (temp) => {
//     setTemp(!temp) 
// }

  return (
    <footer className='w-full text-white h-[auto]'>
        <div className="w-100%] h-[100%] flex flex-row items-center justify-center">
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
                {selectedPlanet && <InfoBox title="Average Temp." content={selectedPlanet.temperature}/> }
                
                {/* NEED TO FIX THE BUTTON COMPONENT */}
                {/* <button
                    onClick={() => handleButtonClick()}
                >Click for Farenheit</button> */}
            </div>
        </div>
    
    </footer>
  )
}

export default Footer
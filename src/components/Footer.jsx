import React, { useContext, useEffect, useState } from 'react'

import InfoBox from './InfoBox'
import TitleModal from './TitleModal'

import { PlanetsContext } from '../../context/PlanetsContext'

const Footer = () => {

const { selectedPlanet } = useContext(PlanetsContext)

const [ temp, setTemp ] = useState('')
const [ isModalVisible, setIsModalVisible ] = useState(false)

// Function to convert temperature from Celsius to Fahrenheit
const convertToFahrenheit = (celsius) => {
    const celsiusRegEx = /-?[0-9]+/
    const celsiusMatch = celsius.match(celsiusRegEx)
    console.log(celsiusMatch)
    return celsiusMatch[0] * 9/5 + 32

}

const handleButtonClick = () => {
    setTemp(convertToFahrenheit(selectedPlanet?.temperature))
}

useEffect(() => {
    setTemp('')

}, [selectedPlanet])

const planetName = selectedPlanet?.name?.toLowerCase() || '';

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
                    {selectedPlanet && 
                    <InfoBox 
                        title="Average Temp." 
                        content={temp !== '' ? `${temp}°F` : selectedPlanet.temperature}
                        /> }

                {!selectedPlanet ? (<TitleModal />) : (
                    <button 
                    className={`body uppercase font-medium ${planetColor} text-white font-bold py-2 px-4 rounded`} 
                    onClick={() => handleButtonClick()}>Click For Farenheit </button>) 
                }   
                </div>
                <div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
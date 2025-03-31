import React, { useContext, useEffect, useState }  from 'react'
import { PlanetsContext } from '../../context/PlanetsContext.jsx'

import Button from '../components/Button.jsx'

const MainSection = () => {

    const { selectedPlanet } = useContext(PlanetsContext)

    const planetOverviewImage = selectedPlanet?.images?.planet || '';
    const planetOverviewContent = selectedPlanet?.overview?.content || '';

    const planetStructureImage = selectedPlanet?.images?.internal || '';
    const planetStructureContent = selectedPlanet?.structure?.content || '';

    const planetGeologyImage = selectedPlanet?.images?.geology ||'';
    const planetGeologyContent = selectedPlanet?.geology?.content || '';


    const [ currentImage, setCurrentImage ] = useState(planetOverviewImage)
    const [ currentContent, setCurrentContent ] = useState(planetOverviewContent)

    useEffect(() => {
      setCurrentImage(planetOverviewImage)
      setCurrentContent(planetOverviewContent)
    }, [selectedPlanet])

  const handleButtonClick = (image, content) => {
    setCurrentImage(image)
    setCurrentContent(content)
  }

  if(!selectedPlanet) {
    return (
      <div className='@ container flex flex-col w-3xl h-[80vh] items-center justify-center'>
        <h1 className='h1 text-white text-center mb-6'>WELCOME TO THE PLANETS</h1>
        <p className='h2 text-white/50 text-center'>This site is designed for you to get to know the planets in our solar system. Please select a planet from above. Have fun!</p>

      </div>
    
    )
  }
  
  return (
    <main className='@container flex flex-row items-center justify-center w-full h-[80vh] text-[var(--color-primary-white)]'>
      <div className='@container w-[60%] h-[100%] flex items-center justify-center'>
        {selectedPlanet && <img src={currentImage} alt={selectedPlanet.name} className='w-2xl h-2xl object-cover' />}
      </div>


      <div className="w-[40%] h-[100%] flex flex-col 
      items-left justify-center gap-4 p-15">
        {selectedPlanet && 
        <h1 className='h1 uppercase'>
            {selectedPlanet.name} </h1>}
        <p className='body text-white/50'>{selectedPlanet && currentContent }</p>
        <p className='body'>Source: {selectedPlanet && selectedPlanet.overview.source}</p>
        <div className="btn-container flex flex-col gap-4 w-[100%]">
            <Button 
            number='01'
            title="Overview" 
            onClick={() => handleButtonClick(planetOverviewImage, planetOverviewContent)}
            />
            <Button 
              number='02' 
              title="Internal Structure"
              onClick={() => handleButtonClick(planetStructureImage, planetStructureContent)} 
              />
            <Button 
              number='03' 
              title="Surface Geology"
              onClick={() => handleButtonClick(planetGeologyImage, planetGeologyContent)}
              />
        </div>
      </div>
    </main>
  )
}

export default MainSection  
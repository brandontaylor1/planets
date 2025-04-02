import React, { useContext, useEffect, useState }  from 'react'
import { PlanetsContext } from '../../context/PlanetsContext.jsx'

import { motion } from "motion/react"

import TitleModal from './TitleModal.jsx'
import Button from '../components/Button.jsx'

const MainSection = () => {

    const { selectedPlanet } = useContext(PlanetsContext)

    const planetOverviewImage = selectedPlanet?.images?.planet || '';
    const planetOverviewContent = selectedPlanet?.overview?.content || '';

    const planetStructureImage = selectedPlanet?.images?.internal || '';
    const planetStructureContent = selectedPlanet?.structure?.content || '';

    const planetGeologyImage = selectedPlanet?.images?.geology ||'';
    const planetGeologyContent = selectedPlanet?.geology?.content || '';
    const [ isGeologyView, setIsGeologyView ] = useState(false)

    const [ currentImage, setCurrentImage ] = useState(planetOverviewImage)
    const [ backgroundImage, setBackgroundImage ] = useState(planetOverviewImage)
    const [ currentContent, setCurrentContent ] = useState(planetOverviewContent)
    const [ activeButton, setActiveButton ] = useState(false)

    useEffect(() => {
      if(selectedPlanet) {
        setCurrentImage(planetOverviewImage)
        setCurrentContent(planetOverviewContent)
        setIsGeologyView(false)
        setActiveButton('01')
      }
    }, [selectedPlanet])

  const handleButtonClick = (image, content, buttonNumber) => {
    setCurrentImage(image)
    setCurrentContent(content)
    setIsGeologyView(false)
    setActiveButton(buttonNumber)
  }

  const handleGeologyClick = (backgroundImage, image, content, buttonNumber) => {
    setBackgroundImage(backgroundImage)
    setCurrentImage(image)
    setCurrentContent(content)
    setIsGeologyView(true)
    setActiveButton(buttonNumber)
  }

  if(!selectedPlanet) {
    return (
      <>
      <TitleModal />
      </>
    )
  }
  
  return (
    <main className='@container w-[100%] min-h-[70vh] flex flex-row items-center justify-center text-[var(--color-primary-white)]'>
      <motion.div
        className='@container w-[100%] h-full flex items-center justify-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{duration: 0.5}}>
        
        {isGeologyView ? 
          ( <div className='flex flex-col items-center justify-center relative'>
              <img src={backgroundImage} alt={selectedPlanet.name} className='w-2xl h-2xl md:w-l md:h-l object-cover'/>
              <img src={currentImage} alt={selectedPlanet.name} className='w-l h-l md:m md:m absolute bottom-0 object-cover' />
          </div>
          ) : (
            <img src={currentImage ? currentImage : null} alt={selectedPlanet.name} className='w-2xl h-2xl object-cover' />
          )}


      <div className="w-[40vw] h-[auto] flex flex-col 
      items-left justify-center gap-10 p-15">
        {selectedPlanet && 
        <h1 className='h1 uppercase'>
            {selectedPlanet.name} </h1>}
        <p className='body text-white/50'>{selectedPlanet && currentContent }</p>
        <p className='body'><a href={selectedPlanet && selectedPlanet.overview.source} target='blank' rel='noopener noreferrer'>Source: Wikipedia</a></p>
        <div className="btn-container flex flex-col gap-4 w-[100%]">
            <Button 
            number='01'
            title="Overview"
            isActive= {activeButton === '01'} 
            onClick={() => handleButtonClick(planetOverviewImage, planetOverviewContent, '01')}
            />
            <Button 
              number='02' 
              title="Internal Structure"
              isActive={activeButton === '02'}
              onClick={() => handleButtonClick(planetStructureImage, planetStructureContent, '02')} 
              />
            <Button 
              number='03' 
              title="Surface Geology"
              isActive={activeButton === '03'}
              onClick={() => handleGeologyClick(planetOverviewImage, planetGeologyImage, planetGeologyContent, '03')}
              />
        </div>
      </div>
      </motion.div>
    </main>
  )
}

export default MainSection  
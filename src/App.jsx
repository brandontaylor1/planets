import React, {useContext} from 'react'

import TitleModal from './components/TitleModal'
import Navbar from './components/Navbar'
import MainSection from './components/MainSection'
import Footer from './components/Footer'

import { PlanetsContext } from '../context/PlanetsContext'

import backgroundStars from '../src/assets/background-stars.svg'

const App = () => {
  const { selectedPlanet } = useContext(PlanetsContext)


  return (
   <section className={`@container flex flex-col items-center space-between w-screen h-screen bg-[var(--color-background-blue)] bg-${backgroundStars} bg-cover bg-no-repeat bg-center bg-blend-screen p-4`}>
    {selectedPlanet === null ? (<TitleModal />) : 
      (
        <>
        <Navbar />
        <MainSection />
        <Footer />
        </>
     )}
   </section>
  )
}

export default App      

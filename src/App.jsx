import React from 'react'
import Navbar from './components/Navbar'
import MainSection from './components/MainSection'
import Footer from './components/Footer'

const App = () => {
  return (
   <section className='@container w-full h-screen bg-[var(--color-background-blue)] bg-[url(./assets/background-stars.svg)] bg-cover bg-no-repeat bg-center bg-blend-screen p-4'>
    <Navbar />
    <section className='w-full h-[auto] flex flex-col items-center justify-center'>
      <MainSection />
      <Footer />
    </section>

   </section>
  )
}

export default App      

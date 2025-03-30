import React, { createContext, useState } from 'react'
import planetsData from '../data.json'

const PlanetsContext = createContext();

const PlanetProvider = ({ children }) => {
    const [planets, setPlanets] = useState(planetsData);

    const [ selectedPlanet, setSelectedPlanet ] = useState(null); 
    return (
        <PlanetsContext.Provider value={
            {planets, 
            setPlanets,
            selectedPlanet,
            setSelectedPlanet}}>
            {children}
        </PlanetsContext.Provider>
    )
}

export { PlanetsContext, PlanetProvider }
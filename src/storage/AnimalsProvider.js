import React from "react";
import { useState } from "react";

export const AnimalsContext = React.createContext(null);

export const AnimalsProvider = ({children}) => {
    const [animals, setAnimals] = useState([{specie: "Dog", name: "Rex", dateOfBirth: new Date(99, 8, 15)}, {specie: "Cat", name: "Catsy", dateOfBirth: new Date(2007, 10, 16)}, {specie: "Tiger", name: "Tigermen", dateOfBirth: null}]);

    return (
        <AnimalsContext.Provider value={{ animals, setAnimals }}>
            {children}
        </AnimalsContext.Provider>
    )
}


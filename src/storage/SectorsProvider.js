import React from "react";
import { useState } from "react";

export const SectorsContext = React.createContext(null);

export const SectorsProvider = ({children}) => {
    const [sectors, setSectors] = useState(["dogs", "cats", "lions", "tigers", "snakes", "rabbits", "ducks"]);

    return (
        <SectorsContext.Provider value={{ sectors, setSectors }}>
            {children}
        </SectorsContext.Provider>
    )
}


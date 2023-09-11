import { useContext } from "react";
import { AnimalsContext } from "../storage/AnimalsProvider";
import { SectorsContext } from "../storage/SectorsProvider"; 
import AppAnimal from "./AppAnimal";
import AppAddAnimal from "./AppAddAnimal"; 

const AnimalList = () => {
    const contextObject = useContext(AnimalsContext);
    const contextObjectSec = useContext(SectorsContext);  

    const handleRemove = index => {
        contextObject.setAnimals(previousValue => previousValue.filter((animal, i) => i !== index));
    }

    const handleMove = index => {
        contextObject.setAnimals(previousValue => [previousValue[index], ...previousValue.filter((animal, i) => i !== index)]);
    }

    const handleAddAnimal = newAnimal => {
        contextObject.setAnimals(previousValue => [...previousValue, newAnimal]);
    }

    return (
        <div style={{ margin: "20px" }}> 
            <AppAddAnimal 
                handleAddAnimal={handleAddAnimal}
                sectors={contextObjectSec.sectors} 
            />
            <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "20px" }}>
                <thead>
                    <tr>
                        <th style={{ backgroundColor: "lightskyblue", border: "1px solid", padding: "8px", textAlign: "left" }}>Specie</th>
                        <th style={{ backgroundColor: "lightskyblue", border: "1px solid", padding: "8px", textAlign: "left" }}>Name</th>
                        <th style={{ backgroundColor: "lightskyblue", border: "1px solid", padding: "8px", textAlign: "left" }}>Date of birth</th>
                        <th style={{ backgroundColor: "lightskyblue", border: "1px solid", padding: "8px", textAlign: "left" }}>Sector</th>
                    </tr>
                </thead>
                <tbody>
                    {contextObject.animals.map((animal, index) => {
                        return (
                            <AppAnimal 
                            key={index}
                            specie={animal.specie}
                            name={animal.name}
                            dateOfBirth={animal.dateOfBirth}
                            sector={animal.sector}
                            index={index}
                            handleRemove={handleRemove}
                            handleMove={handleMove}
                            />
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default AnimalList;


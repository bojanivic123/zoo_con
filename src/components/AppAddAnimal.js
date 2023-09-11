import { useState } from "react";

const AppAddAnimal = ({handleAddAnimal, sectors}) => {
    const [specie, setSpecie] = useState("");
    const [name, setName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [sector, setSector] = useState("");

    return (
        <form onSubmit={e => {e.preventDefault(); handleAddAnimal({specie, name, dateOfBirth, sector})}}  style={{ width: "300px", padding: "15px", border: "1px solid red", margin: "15px auto" }}> 
            <label style={{ display: "block", marginBottom: "5px" }}>Specie</label> 
            <input style={{ width: "60%", padding: "8px", marginBottom: "8px", border: "1px solid" }} type="text" value={specie} onChange={e => setSpecie(e.target.value)}/>
            <label style={{ display: "block", marginBottom: "5px" }}>Name</label>
            <input style={{ width: "60%", padding: "8px", marginBottom: "8px", border: "1px solid" }} type="text" value={name} onChange={e => setName(e.target.value)}/>
            <label style={{ display: "block", marginBottom: "5px" }}>Date of birth</label>
            <input style={{ width: "60%", padding: "8px", marginBottom: "8px", border: "1px solid" }} type="date" value={dateOfBirth} onChange={e => setDateOfBirth(e.target.value)}/>
            <label style={{ display: "block", marginBottom: "5px" }}>Sector</label> 
                <select onChange={e => setSector(e.target.value)} style={{ width: "100px", padding: "8px", marginBottom: "8px", marginRight: "10px" ,borderRadius: "4px", border: "1px solid" }}>
                    {sectors.map((sector, i) => {
                        return (
                            <option key={i} value={sector}>{sector}</option>
                        )
                    })}
                </select>
            <button type="submit" style={{ border: "none", borderRadius: "5px", backgroundColor: "red", color: "white", padding: "10px 20px" }}>Add animal</button>
        </form>
    )
}

export default AppAddAnimal;






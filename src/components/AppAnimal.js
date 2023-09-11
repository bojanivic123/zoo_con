const AppAnimal = ({specie, name, dateOfBirth, sector, handleRemove, handleMove, index}) => {
    return (
        <tr>
            <td style={{ border: "1px solid", padding: "8px", backgroundColor: "lightgray" }}>{specie}</td>
            <td style={{ border: "1px solid", padding: "8px", backgroundColor: "lightgray" }}>{name}</td>
            <td style={{ border: "1px solid", padding: "8px", backgroundColor: "lightgray" }}>{dateOfBirth ? new Date(dateOfBirth).toLocaleDateString() : "Unknown"}</td>
            <td style={{ border: "1px solid", padding: "8px", backgroundColor: "lightgray" }}>{sector}</td>
            <td><button onClick={() => handleRemove(index)} style={{ backgroundColor: "red", color: "white", border: "none", padding: "10px 20px", borderRadius: "5px", fontSize: "14px" }}>Remove</button></td>
            <td><button onClick={() => handleMove(index)} style={{ backgroundColor: "red", color: "white", border: "none", padding: "10px 20px", borderRadius: "5px", fontSize: "14px" }}>Move to top</button></td> 
        </tr>
    )
}

export default AppAnimal;





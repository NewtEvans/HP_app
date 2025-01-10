import React from "react";
const CharacterTable = ({items}) => {

    return (
        <div>
            <table className="table table-bordered text-center">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">House</th>
                        <th scope="col">Actor</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index + 1}>
                            <td>{index + 1}</td>
                            <td><a href={`http://localhost:5173/character/${item.id}`}>{item.name}</a></td>
                            <td>{item.house}</td>
                            <td>{item.actor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CharacterTable;
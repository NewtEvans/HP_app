import React from "react";
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";
const CharacterTable = ({ characters }) => {
  return (
    <div className="card-deck">
      {characters.map((character) => (
        <CharacterCard character={character} />
      ))}
      {/* <table className="table table-bordered text-center">
        <thead className="table-dark">
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
              <td>
                <Link to={`http://localhost:5173/character/${item.id}`}>
                  {item.name}
                </Link>
              </td>
              <td>{item.house}</td>
              <td>{item.actor}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default CharacterTable;

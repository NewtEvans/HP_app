import React from "react";
import { Link } from "react-router-dom";
const CharacterTable = ({ characters }) => {
  return (
    <div>
      <table className="table table-bordered text-center">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">House</th>
            <th scope="col">Actor</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character, index) => (
            <tr key={character.id}>
              <td>{index + 1}</td>
              <td>
                <Link to={`http://localhost:5173/character/${character.id}`}>
                  {character.name}
                </Link>
              </td>
              <td>{character.house}</td>
              <td>{character.actor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CharacterTable;

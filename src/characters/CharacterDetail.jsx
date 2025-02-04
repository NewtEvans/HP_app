import { useEffect, useState } from "react";
import { apiGet } from "../utils/api";
import { useParams } from "react-router-dom";
import CharacterCard from "./CharacterCard";

const CharacterDetail = () => {
  const [characters, setCharacters] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    apiGet(`character/${id}`).then((data) => setCharacters(data));
  }, []);

  return (
    <div>
      {characters.map((character) => (
        <div key={character.id}>
          <h1>
            {character.name} - {character.house}
          </h1>
          <hr />
          <h3>Known as:</h3>
          <ul>
            {character.alternate_names.map((alternate_name) => (
              <li key={alternate_name}>{alternate_name}</li>
            ))}
          </ul>
          <br />
          <p>
            <strong>Species</strong>
            <br />
            {character.species}
          </p>
          <p>
            <strong>Gender</strong>
            <br />
            {character.gender}
          </p>
          <p>
            <strong>Birthday</strong>
            <br />
            {character.dateOfBirth}
          </p>
          <p>
            <strong>Ancestry</strong>
            <br />
            {character.ancestry}
          </p>
          <p>
            <strong>Eyes</strong>
            <br />
            {character.eyeColour}
          </p>
        </div>
      ))}
    </div>
  );
};
export default CharacterDetail;

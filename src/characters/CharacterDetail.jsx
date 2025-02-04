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
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};
export default CharacterDetail;

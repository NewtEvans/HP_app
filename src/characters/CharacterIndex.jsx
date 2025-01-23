import { useEffect, useState } from "react";
import { apiGet } from "../utils/api";
import CharacterTable from "./CharacterTable";

const CharacterIndex = () => {
  const [url, setUrl] = useState("characters");
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    apiGet(url).then((data) => setCharacters(data));
  }, []);

  return (
    <div>
      <CharacterTable characters={characters} />
    </div>
  );
};

export default CharacterIndex;

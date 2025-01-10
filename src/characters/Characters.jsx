import { useEffect, useState } from "react";
import { apiGet } from "../utils/api";

function Characters() {
    const [url, setUrl] = useState("characters");
    const [characters, setCharacters] = useState([]);
    const [data, setData] = useState({});

    useEffect(() => {
        async function fetchCharacters(){
            const data = await apiGet(url)
            setCharacters(data);
        }
        fetchCharacters();
    });

    return (
        <div>
            <ul>
                {characters.map((character) => (
                    <li>{character.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Characters;
import { useEffect, useState } from "react";
import { apiGet } from "../utils/api";
import { useParams } from "react-router-dom";

function CharacterDetail() {
    const {id} = useParams();
    const [url, setUrl] = useState(`character/${id}`);
    const [character, setCharacter] = useState({});


    useEffect(() => {
      apiGet(url)
      .then((data) => {
        setCharacter(data);
      })
      .catch((error) => {
        console.log(error);
      })
    }, [url]);

    return(
      <div>
        <h1>{character?.name}</h1>
        <p><small>Species:{character?.species}</small></p>
        <p>House:{character.house}</p>
        <p>Wizard:{character.wizard}</p>
        <p>Ancestry:{character.ancestry}</p>
        <p>Patronous:{character.patronus}</p>
        <p>Actor:{character.actor}</p>
      </div>  
    );
}

export default CharacterDetail;


import { useEffect, useState } from "react";
import { apiGet } from "../utils/api";
import { data, useParams } from "react-router-dom";

const CharacterDetail = () => {
    const {id} = useParams();
    const [url, setUrl] = useState(`character/${id}`);
    const [character, setCharacter] = useState([]);
    


    useEffect(() => {
      apiGet(url)
      .then((data) => {
        setCharacter(data);   
      })
      .catch((error) => {
        console.log(error);
      });
    }, [url]);

    return(
      <div>
        {character.map((character, index) => (
          <div>
            <h1>{character.name}</h1>
            
          </div>
        ))}
      </div>  
    );
};

export default CharacterDetail;


import { Link } from "react-router-dom";
import "../styles/CharacterStyles.css";

const CharacterCard = ({ character }) => {
  return (
    <div className="card character-card">
      <img
        className="card-img-top character-card-img"
        src={character.image}
        alt="Card image cap"
      />

      <div className="card-body">
        <h3 className="card-title">{character.name}</h3>
        <div className="card-body">
          <p className="card-text">
            <strong>Speacies: </strong>
            {character.species}
          </p>
          <p className="card-text">
            <strong>Gender: </strong>
            {character.gender}
          </p>
        </div>
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  );
};

export default CharacterCard;

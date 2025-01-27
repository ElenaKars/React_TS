import "./styles.css";
import { AnimalProps } from "./types";

function AnimalCard({ animalName, animalSpecies, animalImg, children }: AnimalProps) {
  return (
    <div className="animalCard-wrapper">
      <h3>{animalName}</h3>
      <div>{animalSpecies}</div>
      <img src={animalImg} className="card-image" />
      {children}
    </div>
  );
}

export default AnimalCard;

// import "./styles.css";
import { AnimalProps } from "./types";
import { AnimalCardStyled, ImageAnimal } from "./styles";
// import { AnimalsData } from "../../homeworks/homework07/data";

function AnimalCard({ animalName, animalSpecies, animalImg, children }: AnimalProps) {
  return (
    <AnimalCardStyled>
      <h3>{animalName}</h3>
      <div>{animalSpecies}</div>
      <ImageAnimal src={animalImg} className="card-image" />
      {children}
    </AnimalCardStyled>
  );
}

export default AnimalCard;

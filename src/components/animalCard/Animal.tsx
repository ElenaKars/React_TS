// import "./styles.css";
import { AnimalProps } from "./types";
import { AnimalCardStyled, ImageAnimal, AnimalSpecies, AnimalName } from "./styles";

function AnimalCard({ animalName, animalSpecies, animalImg, children }: AnimalProps) {
  return (
    <AnimalCardStyled>
      <AnimalName>{animalName}</AnimalName>
      <AnimalSpecies>{animalSpecies}</AnimalSpecies>
      <ImageAnimal src={animalImg} />
      {children}
    </AnimalCardStyled>
  );
}

export default AnimalCard;

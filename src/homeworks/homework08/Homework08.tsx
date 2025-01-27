import AnimalCard from "../../components/animalCard/Animal";
import { AnimalsData } from "../homework07/data";
import { Homework08Wrapper } from "./styles";
// import Counter from "../../components/counter/Counter";
import Feedback from "../../components/feedback/Feedback";

export default function Homework08() {
    const animalCards = AnimalsData.map((animal) => {
        return (
            <>
                <AnimalCard animalName={animal.name}
                    animalSpecies={animal.species}
                    animalImg={animal.image} />
            </>
        );
    });
    // return <Homework08Styled>{animalCards}</Homework08Styled>;
    // return <Homework08Wrapper><Counter /></Homework08Wrapper>;
    return <Homework08Wrapper><Feedback /></Homework08Wrapper>;

}
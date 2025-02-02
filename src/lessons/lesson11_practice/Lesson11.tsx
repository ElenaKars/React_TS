import { useEffect, useState } from "react";
import { v4 } from 'uuid';

import Button from "../../components/Button/Button";
import { ButtonWrapper, DeleteBtnWrapper, DeleteButton, FactCard, InfoContainer, Lesson11Wrapper } from "./styles";
import axios from "axios";
import Spinner from "../../components/Spinner/Spinner";
import { ErrorBlock } from "../lesson10/styles";

function Lesson11() {
  const URL_DATA: string = 'https://catfact.ninja/fact';
  const [facts, setFacts] = useState<{ id: string; text: string; }[]>([]);
  const [isVisible, setVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<undefined | string>(undefined);
  const [disabled, setDisabled] = useState<boolean>(false);


  const factCards = facts.map((fact, i) => {
    return (
      <FactCard key={fact.id} isNew={i === facts.length - 1}>
        {fact.text}
        <DeleteBtnWrapper>
          <DeleteButton onClick={() => deleteFact(fact.id)}>X</DeleteButton>
        </DeleteBtnWrapper>
      </FactCard >
    );
  });

  const deleteFact = (id: string) => {
    setFacts((prevFacts) => prevFacts.filter((fact) => fact.id !== id));
    if (facts.length === 1) {
      setVisible(false);
    }
  };

  const deleteAll = () => {
    setFacts([]);
    setVisible(false);
  };

  const getCatsFact = async () => {
    setError(undefined);
    if (facts.length === 0) {
      setLoading(true);
    }
    setDisabled(true);

    try {
      const result = await axios.get(URL_DATA);
      const newFact = { id: v4(), text: result.data.fact };
      setFacts((prevFacts) => [...prevFacts, newFact]);
      setVisible(true);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
      setDisabled(false);
    }
  };

  useEffect(() => {
    if (facts.length === 0) {
      getCatsFact();
    }
  }, []);

  return (
    <Lesson11Wrapper>
      <ButtonWrapper>
        <Button name="GET MORE INFO" onClick={getCatsFact} disabled={disabled} />
      </ButtonWrapper>

      {loading && <Spinner />}

      {error && <ErrorBlock />}
      {facts && <InfoContainer isVisible={isVisible}>{factCards}</InfoContainer>}
      <ButtonWrapper>
        {facts.length > 0 && <Button name="DELETE ALL DATA" onClick={deleteAll} />}
      </ButtonWrapper>
    </Lesson11Wrapper>
  );
}

export default Lesson11;
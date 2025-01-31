import { ChangeEvent, useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import { ButtonWrapper, FactCard, InfoContainer, Lesson11Wrapper } from "./styles";
import axios from "axios";
import Spinner from "../../components/Spinner/Spinner";
import { ErrorBlock } from "../lesson10/styles";

function Lesson11() {
  const URL_DATA: string = 'https://catfact.ninja/fact';
  const [facts, setFact] = useState<string[]>([]);
  const [isVisible, setVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<undefined | string>(undefined);
  const [disabled, setDisabled] = useState<boolean>(false);

  const factCards = facts.map((fact, i) => {
    return (
      <><FactCard key={i} isNew={i === facts.length - 1}>{fact}</FactCard></>
    );
  });

  const deleteAll = () => {
    setFact([]);
    setVisible(false);
  };

  const getCatsFact = async () => {
    setError(undefined);
    if (facts.length === 0) {
      setLoading(true);
    }
    setDisabled(true);
    // setVisible(false);
    try {
      const result = await axios.get(URL_DATA);
      const data = result.data.fact;
      setFact((facts) => [...facts, data]);
      setVisible(true);
    } catch (error: any) {
      setError(error.massage);
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
      {facts && <InfoContainer isVisible={isVisible}>{factCards}
      </InfoContainer>}
      <ButtonWrapper>
        <Button name="DELETE ALL DATA" onClick={deleteAll} />
      </ButtonWrapper>
    </Lesson11Wrapper>
  );
}

export default Lesson11;
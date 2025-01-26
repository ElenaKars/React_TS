import { useState } from "react";
import Button from "../Button/Button";
import "./styles.css";

function Counter() {
  const [counter, setCounter] = useState<number>(0);

  const onPlusClick = (): void => {
    setCounter((prevState) => prevState + 1);
  };

  const onMinusClick = (): void => {
    setCounter((prevState) => (prevState > 0 ? prevState - 1 : prevState));
  };
  return (
    <div className="counter-wrapper">
      <div className="button-wrapper">
        <Button name="-" onClick={onMinusClick} type="button" />
      </div>
      <div className="result-container">{counter}</div>
      <div className="buttons-wrapper">
        <Button name="+" onClick={onPlusClick} type="button" />
      </div>
    </div>
  );
}

export default Counter;

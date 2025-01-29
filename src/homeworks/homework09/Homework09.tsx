import { ChangeEvent, useState } from "react";
import Input from "../../components/input/Input";
import {
    Homework09Wrapper,
    InputsContainer,
    OutputBox,
    OutputBoxLabel,
    OutputBoxWrapper
} from "./styles";
import Button from "../../components/Button/Button";

function Homework09() {
    const [inputValue, setValue] = useState<string>('');
    const [inputValue2, setValue2] = useState<string>('');
    const [outputIsVisible, setVisibleOutput] = useState<boolean>(false);

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    const onChangeValue2 = (e: ChangeEvent<HTMLInputElement>) => {
        setValue2(e.target.value);
    };

    const onClick = () => {
        setVisibleOutput(!outputIsVisible);
    };

    return (
        <Homework09Wrapper>
            <InputsContainer>
                <Input
                    name="input-name"
                    label="Value 1"
                    value={inputValue}
                    onChange={onChangeValue}
                ></Input>
                <Input
                    name="input-name"
                    label="Value 2"
                    value={inputValue2}
                    onChange={onChangeValue2}
                ></Input>
            </InputsContainer>
            <OutputBoxWrapper isVisible={outputIsVisible}>
                <OutputBoxLabel>Output Value 1</OutputBoxLabel>
                <OutputBox>{inputValue}</OutputBox>
                <OutputBoxLabel>Output Value 2</OutputBoxLabel>
                <OutputBox>{inputValue2}</OutputBox>
            </OutputBoxWrapper>
            <Button
                name={outputIsVisible ? "Hide Values" : "Get Values"}
                onClick={onClick}></Button>
        </Homework09Wrapper>
    );
}

export default Homework09;
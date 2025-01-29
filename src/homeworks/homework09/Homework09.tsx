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
    //add 2 extra states for storage values, whish should be displayed at the time the block is displayed
    const [output, setOutput] = useState<string>('');
    const [output2, setOutput2] = useState<string>('');

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    const onChangeValue2 = (e: ChangeEvent<HTMLInputElement>) => {
        setValue2(e.target.value);
    };

    const onClick = () => {
        setOutput(inputValue);
        setOutput2(inputValue2);

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
                {output && <OutputBox>{output}</OutputBox>}
                {output2 && <OutputBoxLabel>Output Value 2</OutputBoxLabel>}
                {output2 && <OutputBox>{output2}</OutputBox>}
            </OutputBoxWrapper>
            <Button
                name={outputIsVisible ? "Hide Values" : "Get Values"}
                onClick={onClick}
                disabled={!inputValue && !inputValue2} />

        </Homework09Wrapper>
    );
}

export default Homework09;
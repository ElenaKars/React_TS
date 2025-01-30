import { ChangeEvent, useEffect, useState } from "react";
import Input from "../../components/input/Input";
import { FormContainer, Homework10Wrapper, ImageStyled, ResultBox } from "./styles";
import axios from "axios";
import Spinner from "../../components/Spinner/Spinner";
import { ErrorBlock } from "../../lessons/lesson10/styles";

function Homework10() {
    const [inputValue, setInputValue] = useState<string>('');
    const [inputValue2, setInputValue2] = useState<string>('');
    const [image, setImage] = useState<string>('');
    const [error, setError] = useState<undefined | string>(undefined);
    const [loading, setLoading] = useState<boolean>(false);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };
    const onChange2 = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue2(e.target.value);
    };

    const fetchPicData = async () => {
        const PIC_URL: string = 'https://dog.ceo/api/breeds/image/random';
        setImage('');
        setError(undefined);
        setLoading(true);
        try {
            const result = await axios.get(PIC_URL);
            setImage(result.data.message);
        } catch (error: any) {
            setError(error.message);
        } finally { }
        setLoading(false);
    };

    useEffect(() => {
        if (inputValue) {
            fetchPicData();
        }
    },
        [inputValue]);

    return (
        <Homework10Wrapper>
            <FormContainer>
                <Input name='inputName' value={inputValue} onChange={onChange} />
                <Input name='inputName2' value={inputValue2} onChange={onChange2} />
            </FormContainer>

            <ResultBox>
                {image && <ImageStyled src={image} />}
            </ResultBox>
            {loading && <Spinner />}
            {error && <ErrorBlock>{error}</ErrorBlock>}
        </Homework10Wrapper>
    );
}

export default Homework10;

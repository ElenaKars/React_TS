import styled from "@emotion/styled";

interface ImageStyledProps {
  src: string;
}
export const Homework10Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 20px;
`;

export const FormContainer = styled.form`
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ResultBox = styled.div``;

export const ImageStyled = styled.img<ImageStyledProps>`
  width: 300px;
  height: 300px;
`;

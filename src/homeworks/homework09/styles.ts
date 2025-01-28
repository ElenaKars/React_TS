import styled from "@emotion/styled";

interface OutputBoxWrapperProps {
  isVisible: boolean;
}

export const Homework09Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 300px;
  margin: auto;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
  padding: 20px;
  background-color: #75e1ed;
`;

export const OutputBoxWrapper = styled.div<OutputBoxWrapperProps>`
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  justify-content: center;
  gap: 15px;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
`;

export const OutputBoxLabel = styled.div`
  font-size: 14px;
  color: grey;
  line-height: 2px;
`;
export const OutputBox = styled.div`
  display: flex;
  border: 1px solid grey;
  padding: 10px;
  height: 50px;
`;

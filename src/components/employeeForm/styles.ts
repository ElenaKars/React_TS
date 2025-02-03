import styled from "@emotion/styled";

export const EmployeeFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 60px;
  width: 590px;
  min-height: 350px;
  max-height: fit-content;
  background-color: white;
  border: 1px solid black;
  border-radius: 4px;
`;

export const Title = styled.h2`
  font-size: 24px;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Checkbox = styled.input`
  width: 25px;
  height: 25px;
`;

export const Checkboxlabel = styled.label`
  font-size: 16px;
`;

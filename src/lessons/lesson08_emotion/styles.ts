import styled from "@emotion/styled";
import { css } from "@emotion/react";

//interface for props of stiling component
interface BoxInfoStyledProps {
  primary?: boolean;
}

// styles template
const boxBasicStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
export const BoxInfo = styled.div<BoxInfoStyledProps>`
  ${boxBasicStyles}
  min-width: 300px;
  min-height: 300px;
  /* background-color: rebeccapurple; */
  //add logic using props for different propertie's value
  background-color: ${(props) => (props.primary ? "rebeccapurple" : "purple")};
  /* border: 1px solid purple; */
  border: ${({ primary }) =>
    primary ? "3px solid purple" : "3px solid black"};
  color: white;
  //pseudoclass
  &:hover {
    background-color: #ec4dfa;
  }
`;

export const ContentContainer = styled.div`
  ${boxBasicStyles}
  flex-direction: column;
  gap: 20px;
  border-color: grey;
`;
export const Image = styled.img`
  width: 30px;
`;

export const Text = styled.p`
  font-size: 24px;
  color: red;
`;

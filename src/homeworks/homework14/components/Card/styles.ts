import styled from "@emotion/styled";

interface CardWrapperProps {
  isShowResult: boolean;
}
export const CardWrapper = styled.div<CardWrapperProps>`
  display: ${({ isShowResult }) => (isShowResult ? "flex" : "none")};
  background-color: blue;
  flex-direction: column;
`;
export const Username = styled.div`
  padding: 30px 12px 30px;
`;

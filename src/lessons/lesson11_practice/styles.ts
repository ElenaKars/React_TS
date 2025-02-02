import styled from "@emotion/styled";

interface InfoContainerProps {
  isVisible: boolean;
}
interface FactCardProps {
  isNew?: boolean;
  isDeleted?: boolean;
}
// interface DeleteAllFactsProps {
//   isVisible: boolean;
// }

export const Lesson11Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  flex: 1;
  gap: 20px;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.div`
  width: 800px;
`;

export const DeleteBtnWrapper = styled.div`
  width: 50%;
`;

export const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: grey;
  color: white;
  font-size: 10px;
  font-weight: bold;
  border: none;
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkred;
  }
`;

export const InfoContainer = styled.div<InfoContainerProps>`
  width: 800px;
  max-height: 700px;
  padding: 30px;
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex: 1;
  gap: 15px;
  overflow-y: auto;
  background-color: #8acae6;
  border: 1px solid black;
  border-radius: 6px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
`;

export const FactCard = styled.div<FactCardProps>`
  display: ${({ isDeleted }) => (isDeleted ? "none" : "flex")};
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 30px 15px 15px;
  background-color: aliceblue;
  width: calc(33.333% - 10px);
  min-height: 100px;
  height: auto;
  border: 1px solid grey;
  border-radius: 4px;
  word-wrap: break-word;
  white-space: normal;
  overflow: hidden;
  gap: 10px;
  position: relative;

  ${({ isNew }) =>
    isNew &&
    `
    opacity: 0;
    transform: translateY(10px);
    animation: fadeIn 0.5s ease-in-out forwards;
  `}

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

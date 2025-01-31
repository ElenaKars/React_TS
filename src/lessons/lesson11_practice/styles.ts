import styled from "@emotion/styled";

interface InfoContainerProps {
  isVisible: boolean;
}
interface NewFactCard {
  isNew?: boolean;
}

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

export const InfoContainer = styled.div<InfoContainerProps>`
  padding: 30px;
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  flex-wrap: wrap;
  max-height: 700px;
  overflow-y: scroll;
  width: 800px;
  overflow-y: auto;
  background-color: #8acae6;
  border: 1px solid black;
  border-radius: 6px;
  flex: 1;
  align-items: flex-start;
  justify-content: center;

  &::-webkit-scrollbar {
    width: 8px; /* Толщина полосы прокрутки */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888; /* Цвет ползунка */
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* Цвет при наведении */
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1; /* Цвет фона полосы */
  }
`;

export const FactCard = styled.div<NewFactCard>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 15px;
  background-color: aliceblue;
  width: 25%;
  min-height: 100px;
  height: auto;
  border: 1px solid grey;
  border-radius: 4px;
  margin: 10px;
  word-wrap: break-word;
  white-space: normal;
  overflow: hidden;
  /* opacity: 0; */
  transform: translateY(10px);

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

import styled from "@emotion/styled";
import Button from "components/Button/Button";
import Input from "components/input/Input";

export const BlogManagementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
`;

export const InputStyled = styled(Input)`
  /* font-family: "Lato", sans-serif;
  font-size: 16px; */
  width: 100%;
  height: auto;
  height: 300px;
  resize: none;
  overflow-y: auto;
  padding: 12px;

  &:focus {
    outline: none;
    background: white;
  }
`;

export const ButtonStyled = styled(Button)`
  background-color: #274e1d; // Новый цвет фона для этой кнопки
  font-size: 18px; // Уменьшаем шрифт для кнопки
  padding: 12px 20px; // Добавляем отступы
  border-radius: 8px; // Изменяем радиус скругления
  color: #fff; // Устанавливаем белый цвет текста

  &:hover {
    background-color: #1d3c15; // Цвет фона при наведении
  }

  &:active {
    background-color: #163315; // Цвет фона при нажатии
  }
`;

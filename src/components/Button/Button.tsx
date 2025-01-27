import "./styles.css";
import { ButtonProps } from "./types";
import { MainButton } from "./styles";

function Button({
  name,
  type = "button",
  onClick,
  imgSrc = "",
  altImg = "",
}: ButtonProps) {

  return (
    <MainButton type={type} onClick={onClick}>
      {name}
      {imgSrc && <img src={imgSrc} alt={altImg} className="button-image" />}
    </MainButton>
  );
}

//default export must be only one in the file
export default Button;


import "./styles.css";
import { ButtonProps } from "./types";


function Button({
  id,
  name,
  type = "button",
  onClick,
  imgSrc = "",
  altImg = "",
}: ButtonProps) {

  return (
    <button id={id} className="main-button" type={type} onClick={onClick}>
      {name}
      {imgSrc && <img src={imgSrc} alt={altImg} className="button-image" />}
    </button>
  );
}

//default export must be only one in the file

export default Button;


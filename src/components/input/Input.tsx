import { InputProps } from "./types";
import { InputWrapper, InputStyled } from "./styles";

function Input({
  name,
  type = 'text',
  placeholder,
  label,
  id
}: InputProps) {
  return (
    <InputWrapper>
      {label && (
        <label htmlFor={name} className="input-label">
          {label}
        </label>
      )}
      <InputStyled
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
}

export default Input;

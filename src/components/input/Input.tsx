import { InputProps } from "./types";
import { InputWrapper, InputStyled, Label } from "./styles";

function Input({
  name,
  type = 'text',
  placeholder,
  label,
  id,
  value,
  onChange
}: InputProps) {
  return (
    <InputWrapper>
      {label && (
        <Label htmlFor={name} className="input-label">
          {label}
        </Label>
      )}
      <InputStyled
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  );
}

export default Input;

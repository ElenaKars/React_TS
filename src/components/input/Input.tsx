import "./styles.css";
import { InputProps } from "./types";

function Input({ name,
  type = 'text',
  placeholder,
  label,
  id
}: InputProps) {
  return (
    <div className="input-wrapper">
      {label && (
        <label htmlFor={name} className="input-label">
          {label}
        </label>
      )}
      <input
        className="input"
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;

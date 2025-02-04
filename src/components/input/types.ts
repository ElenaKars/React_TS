import { ChangeEvent } from "react";

export interface InputProps {
  name: string;
  type?: "text" | "password" | "email" | "number" | "tel" | "url" | "checkbox";
  placeholder?: string;
  label?: string;
  id?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  checked?: boolean;
}

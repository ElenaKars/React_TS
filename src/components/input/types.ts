export interface InputProps {
    name: string,
    type?: "text" | "password" | "email" | "number" | "tel" | "url",
    placeholder?: string,
    label?: string 
}
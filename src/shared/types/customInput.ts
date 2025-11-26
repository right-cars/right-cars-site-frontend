import { ChangeEvent } from "react";

export interface CustomInputProps {
  label: string;
  required?: boolean;
  id: string;
  value: string;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  options?: string[];
  placeholder?: string;
  type?: string;
  password?: boolean;
  phone?: boolean;
  bordered?: boolean;
  disabled?: boolean
}

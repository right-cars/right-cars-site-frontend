import { ChangeEvent } from "react";

export type AccountField = {
  id: string;
  label: string;
  type?: string;
  phone?: boolean;
};

export type StepProps = {
  formData: { [key: string]: string };
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
  formFields?: Record<string, AccountField[]>;
     formFields2?: AccountField[];
};

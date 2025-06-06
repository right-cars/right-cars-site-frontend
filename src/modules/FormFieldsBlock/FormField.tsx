import CustomInput from "@/shared/components/CustomInput/CustomInput";
import CustomSelect from "@/shared/components/CustomSelect/CustomSelect";
import { FormFields } from "@/shared/types/formField";

import cls from "./styles.module.scss";

interface FormFieldsBlockProps {
  title?: string;
  fields: FormFields[];
  formData: { [key: string]: string };
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
}

export default function FormFieldsBlock({
  formData,
  handleChange,
  fields,
  title,
}: FormFieldsBlockProps) {
  return (
    <div className={cls.container}>
      {title && <h4 className="titleMedium" style={{ marginBottom: 32 }}>{title}</h4>}

      <div className={cls.inputsWrapp}>
        {fields.map(
          ({ id, label, type, options, placeholder, required, phone }) => {
            return type === "input" ? (
              <CustomInput
                key={id}
                id={id}
                label={label}
                required={required}
                value={formData[id]}
                handleChange={handleChange}
                placeholder={placeholder}
                phone={phone}
              />
            ) : (
              <CustomSelect
                key={id}
                id={id}
                label={label}
                required={required}
                value={formData[id]}
                handleChange={handleChange}
                options={options || []}
                placeholder={placeholder}
              />
            );
          }
        )}
      </div>
    </div>
  );
}

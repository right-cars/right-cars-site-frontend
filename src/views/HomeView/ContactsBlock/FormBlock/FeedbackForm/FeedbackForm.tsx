import CustomInput from "@/shared/components/CustomInput/CustomInput";
import CustomSelect from "@/shared/components/CustomSelect/CustomSelect";
import CustomTextarea from "@/shared/components/CustomTextArea/CustomTextArea";

import { fields } from "./fieldsData";

import cls from "../styles.module.scss";

interface FeedbackFormProps {
  formData: { [key: string]: string };
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
}

export default function FeedbackForm({
  formData,
  handleChange,
}: FeedbackFormProps) {
  return (
    <div className={cls.form}>
      {fields.map(({ id, label, type, options, placeholder }) => {
        const inputElement =
          type === "input" ? (
            <CustomInput
              key={id}
              id={id}
              label={label}
              required
              value={formData[id]}
              handleChange={handleChange}
            />
          ) : type === "select" ? (
            <CustomSelect
              key={id}
              id={id}
              label={label}
              required
              value={formData[id]}
              handleChange={handleChange}
              options={options || []}
              placeholder={placeholder}
            />
          ) : (
            <CustomTextarea
              key={id}
              id={id}
              label={label}
              value={formData[id]}
              handleChange={handleChange}
            />
          );

        return id === "province" ? (
          <div key="province-city" className={cls.inputAndSelectWrapp}>
            <div>{inputElement}</div>

            <CustomInput
              id="city"
              label="city / town / suburb (required)"
              required
              value={formData.city}
              handleChange={handleChange}
            />
          </div>
        ) : id === "city" ? null : (
          inputElement
        );
      })}
    </div>
  );
}

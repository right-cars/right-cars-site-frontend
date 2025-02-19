import { StepProps } from "@/shared/types/account";
import CustomInput from "@/shared/components/CustomInput/CustomInput";

import cls from "./styles.module.scss";

export default function SecondStep(props: StepProps & { required: boolean }) {
  const { formData, handleChange, formFields2, required } = props;
  return (
    <>
      <div className={cls.wrapp}>
        {formFields2?.map(({ id, label, phone }) => (
          <div style={{ marginTop: 12 }} key={id}>
            <CustomInput
              bordered
              phone={phone}
              id={id}
              label={label}
              type="input"
              required={required}
              handleChange={handleChange}
              value={formData[id] || ""}
            />
          </div>
        ))}
      </div>
    </>
  );
}

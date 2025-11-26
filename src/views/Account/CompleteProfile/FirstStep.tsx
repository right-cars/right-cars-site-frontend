import { StepProps } from "@/shared/types/account";
import CustomSelect from "@/shared/components/CustomSelect/CustomSelect";
import CustomInput from "@/shared/components/CustomInput/CustomInput";

import cls from "./styles.module.scss";

export default function FirstStep({
  formData,
  handleChange,
  formFields,
}: StepProps) {
  return (
    <>
      <h4 className="titleSmall">Complete your profile</h4>
      <div className={cls.wrapp}>
        <CustomSelect
          bordered
          label="legal entity type"
          id="legalEntityType"
          handleChange={handleChange}
          placeholder="not selected"
          options={formFields ? Object.keys(formFields) : []}
          value={formData.legalEntityType}
        />

        {formData.legalEntityType &&
          formFields?.[formData.legalEntityType]?.map(
            ({ id, label, phone }) => (
              <div style={{ marginTop: 12 }} key={id}>
                <CustomInput
                  bordered
                  phone={phone}
                  id={id}
                  label={label}
                  type="input"
                  required
                  handleChange={handleChange}
                  value={formData[id] || ""}
                />
              </div>
            )
          )}
      </div>
    </>
  );
}

"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import Checkbox from "@/shared/components/Checkbox/Checkbox";
import CustomInput from "@/shared/components/CustomInput/CustomInput";

import EditBtn from "@/views/Account/PersonalDetails/EditBtn/EditBtn";
import SecondStep from "@/views/Account/CompleteProfile/SecondStep";
import TitleBlock from "@/views/Account/PersonalDetails/TitleBlock/TitleBlock";

import { step1, step2, step3 } from "./tempData";

import cls from "./styles.module.scss";

type FormData = {
  [key: string]: string;
};

const initialFormData: FormData = [...step1, ...step2, ...step3].reduce(
  (acc, field) => ({ ...acc, [field.id]: field.value }),
  {}
);

export default function Account() {
  const [formData, setFormData] = useState(initialFormData);

  const [localSteps, setLocalSteps] = useState({
    step1: { ...initialFormData },
    step2: { ...initialFormData },
    step3: { ...initialFormData },
  });

  const [editingSteps, setEditingSteps] = useState({
    step1: false,
    step2: false,
    step3: false,
  });

  const [postalAdressChecked, setPostalAdressChecked] = useState(
    step3.length === 0
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setPostalAdressChecked(checked);
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleEdit = (step: keyof typeof localSteps) => {
    setLocalSteps((prev) => ({ ...prev, [step]: { ...formData } }));
    setEditingSteps((prev) => ({ ...prev, [step]: true }));
  };

  const handleCancel = (step: keyof typeof localSteps) => {
    setFormData((prev) => ({ ...prev, ...localSteps[step] }));
    setEditingSteps((prev) => ({ ...prev, [step]: false }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setEditingSteps({
      step1: false,
      step2: false,
      step3: false,
    });
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        {/* Step 1 */}
        <div className={cls.inputsWrapper} style={{ marginBottom: 16 }}>
          <TitleBlock title="personal details" isEditing={editingSteps.step1} />

          {step1.map(({ id, label, phone }) => (
            <div key={id} className={cls.personalDetailsWrapp}>
              <CustomInput
                bordered={editingSteps.step1}
                phone={phone}
                id={id}
                label={label}
                type="input"
                required
                handleChange={handleChange}
                value={formData[id] || ""}
                disabled={!editingSteps.step1}
              />
            </div>
          ))}
          <EditBtn
            isEditing={editingSteps.step1}
            onEdit={() => handleEdit("step1")}
            onCancel={() => handleCancel("step1")}
          />
        </div>

        {/* Step 2 */}
        <div className={cls.inputsWrapper}>
          <TitleBlock
            title="Physical Home Address"
            isEditing={editingSteps.step2}
          />

          <SecondStep
            bordered={editingSteps.step2}
            required
            handleChange={handleChange}
            formData={formData}
            formFields2={step2}
            disabled={!editingSteps.step2}
          />

          <EditBtn
            isEditing={editingSteps.step2}
            onEdit={() => handleEdit("step2")}
            onCancel={() => handleCancel("step2")}
          />
        </div>

        {/* Step 3 */}
        <div className={cls.inputsWrapper} style={{ marginTop: 16 }}>
          <TitleBlock title="Postal Address" isEditing={editingSteps.step3} />

          <Checkbox
            id="postalAddress"
            variant="square"
            label="Same as physical address"
            checked={postalAdressChecked}
            onToggle={handleChange}
          />
          {!postalAdressChecked && (
            <SecondStep
              bordered={editingSteps.step3}
              required
              handleChange={handleChange}
              formData={formData}
              formFields2={step2}
              disabled={!editingSteps.step3}
            />
          )}
          <EditBtn
            isEditing={editingSteps.step3}
            onEdit={() => handleEdit("step3")}
            onCancel={() => handleCancel("step3")}
          />
        </div>
      </form>
    </section>
  );
}

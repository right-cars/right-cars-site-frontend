"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import Button from "@/shared/components/Buttons/Button/Button";
import Checkbox from "@/shared/components/Checkbox/Checkbox";

import DocumentsBlock from "@/views/Account/DocumentsBlock/DocumentsBlock";
import FirstStep from "@/views/Account/CompleteProfile/FirstStep";
import SecondStep from "@/views/Account/CompleteProfile/SecondStep";

import { formFields } from "./foormFields";
import { formFieldsStep2 } from "./formFieldsStep2";
import { formFieldsStep3 } from "./formFieldsStep3";

import cls from "./styles.module.scss";

type LegalEntityType = keyof typeof formFields;

type FormData = {
  legalEntityType: LegalEntityType;
  [key: string]: string;
};

const initialFormData: FormData = {
  legalEntityType: "",
};

export default function CompleteProfile() {
  const [formData, setFormData] = useState(initialFormData);
  const [postalAdressChecked, setPostalAdressChecked] = useState(true);
  const [agreement, setAgreement] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  //   const resetForm = () => {
  //     setFormData(initialFormData);
  //   };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      if (name === "postalAddress") {
        setPostalAdressChecked(checked);
      } else if (name === "agreement") {
        setAgreement(checked);
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleNext = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentStep === 1) {
      setCurrentStep(2);
    } else {
      setCurrentStep(3);
      //   resetForm();
    }
  };

  return (
    <section>
      <form onSubmit={handleNext}>
        {currentStep === 1 && (
          <div className={cls.wrapper}>
            <FirstStep
              handleChange={handleChange}
              formData={formData}
              formFields={formFields}
            />
          </div>
        )}

        {currentStep === 2 && (
          <>
            <div className={cls.wrapper}>
              <h4 className={`${"titleSmall"} ${cls.title}`}>Physical Home Address</h4>
              <SecondStep
                required
                handleChange={handleChange}
                formData={formData}
                formFields2={formFieldsStep2}
              />
            </div>
            <div className={cls.wrapper} style={{ marginTop: 16 }}>
              <h4 className={`${"titleSmall"} ${cls.title}`}>Postal Address</h4>
              <Checkbox
                id="postalAddress"
                variant="square"
                label="Same as physical address"
                checked={postalAdressChecked}
                onToggle={handleChange}
              />
              {!postalAdressChecked && (
                <SecondStep
                  required={false}
                  handleChange={handleChange}
                  formData={formData}
                  formFields2={formFieldsStep3}
                />
              )}
            </div>
            <div className={cls.checkboxWrapp}>
              <Checkbox
                id="agreement"
                variant="square"
                label="I agree that Right Cars may collect, collate, process and/ or disclose my personal information provided for marketing purposes and that rightCars may contact me in the future"
                checked={agreement}
                onToggle={handleChange}
              />
            </div>
          </>
        )}
        {currentStep !== 3 && (
          <div className={cls.btn}>
            <Button text="next" type="submit" />
          </div>
        )}
      </form>
      {currentStep === 3 && (
        <DocumentsBlock legalEntityType={formData.legalEntityType} />
      )}
    </section>
  );
}

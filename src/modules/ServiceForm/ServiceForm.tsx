"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import Button from "@/shared/components/Buttons/Button/Button";
import ModalWindow from "@/shared/components/ModalWindow/ModalWindow";
import ThanksPopup from "@/shared/components/Popups/ThanksPopup/ThanksPopup";

import FormFieldsBlock from "@/modules/FormFieldsBlock/FormField";
import PrivacyPolicy from "@/modules/PrivacyPolicy/PrivacyPolicy";

import CheckboxBlock from "@/views/ServiceCar/CheckboxBlock";

import { fieldsData } from "./fieldsData";
import { checkboxData } from "./checkboxesData";

import cls from "./styles.module.scss";

interface ServiveProps {
  isCarService: boolean;
}

export default function ServiceForm({ isCarService }: ServiveProps) {
  const initialFormData = {
    firstName: "",
    surname: "",
    contactNumber: "",
    email: "",
    vehicleYear: "",
    ...(isCarService ? { vehicleRegistrationNumber: "" } : {}),
    vehicleMake: "",
    ...(isCarService ? { currentVehicleKilometers: "" } : {}),
    vehicleModel: "",
    ...(isCarService ? { vehicleServiceDueDate: "" } : {}),
  };

  const [formData, setFormData] = useState(initialFormData);
  const [privacyPolicyChecked, setPrivacyPolicyChecked] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const resetForm = () => {
    setFormData(initialFormData);
    setSelectedOptions([]);
    setPrivacyPolicyChecked(false);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setPrivacyPolicyChecked(checked);
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleCheckboxChange = (newSelected: string[]) => {
    setSelectedOptions(newSelected);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log("selectedOptions:", selectedOptions);
    setIsModalOpen(true);

    resetForm();
  };

  const filteredFieldsData = fieldsData.filter(
    (field) => !field.isCarService || (field.isCarService && isCarService)
  );
  return (
    <>
      <form className="container section" onSubmit={handleSubmit}>
        <FormFieldsBlock
          title="service form"
          handleChange={handleChange}
          formData={formData}
          fields={filteredFieldsData}
        />

        <div
          className={`${cls.privacyPolecyWrapp} ${
            isCarService && cls.checkboxAndPrivacyPolicyWrapp
          }`}
        >
          {isCarService && (
            <div className={`${cls.blockWrapp} ${cls.checkboxWrapp}`}>
              {checkboxData.map(({ title, options }, index) => (
                <CheckboxBlock
                  key={index}
                  selected={selectedOptions}
                  onChange={handleCheckboxChange}
                  title={title}
                  options={options}
                />
              ))}
            </div>
          )}

          <div className={cls.blockWrapp}>
            <PrivacyPolicy
              handleChange={handleChange}
              privacyPolicyChecked={privacyPolicyChecked}
            />
            <div className={cls.btnWrapp}>
              <Button text="get a quote" type="submit" />
            </div>
          </div>
        </div>
      </form>
      <ModalWindow
        isModalOpen={isModalOpen}
        closeBtn
        setIsModalOpen={setIsModalOpen}
      >
        <ThanksPopup text="Thank you! We have received your application and our team will contact you with further details" />
      </ModalWindow>
    </>
  );
}

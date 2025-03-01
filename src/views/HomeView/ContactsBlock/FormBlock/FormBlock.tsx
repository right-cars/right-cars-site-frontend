"use client";

import { useState, ChangeEvent, FormEvent } from "react";

import Button from "@/shared/components/Buttons/Button/Button";
import ThanksPopup from "@/shared/components/Popups/ThanksPopup/ThanksPopup";
import ModalWindow from "@/shared/components/ModalWindow/ModalWindow";

import PrivacyPolicy from "@/modules/PrivacyPolicy/PrivacyPolicy";

import FeedbackForm from "./FeedbackForm/FeedbackForm";

import cls from "./styles.module.scss";

export default function FormBlock() {
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    contactNumber: "",
    email: "",
    subject: "",
    province: "",
    city: "",
    message: "",
  });

  const [privacyPolicyChecked, setPrivacyPolicyChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setIsModalOpen(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FeedbackForm formData={formData} handleChange={handleChange} />
        <div className={cls.privacyPolicyBlock}>
          <PrivacyPolicy
            handleChange={handleChange}
            privacyPolicyChecked={privacyPolicyChecked}
          />
          <div className={cls.btnWrapp}>
            <Button text="submit" type="submit" />
          </div>
        </div>
      </form>
      {isModalOpen && (
        <ModalWindow closeBtn setIsModalOpen={setIsModalOpen}>
          <ThanksPopup text="Your message has been sent successfully!"/>
        </ModalWindow>
      )}
    </>
  );
}

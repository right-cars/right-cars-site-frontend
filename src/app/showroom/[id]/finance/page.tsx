"use client";
import { ChangeEvent, FormEvent, useState } from "react";
// import { useParams } from "next/navigation";
import Container from "@/shared/layouts/Container/Container";
import cls from "./styles.module.scss";
import ModalWindow from "@/shared/components/ModalWindow/ModalWindow";
import ThanksPopup from "@/shared/components/Popups/ThanksPopup/ThanksPopup";
import FormFieldsBlock from "@/modules/FormFieldsBlock/FormField";
import { fieldsBlock } from "./fieldsData";
import Button from "@/shared/components/Buttons/Button/Button";
import { initialFormData } from "./initialState";

export default function FinancePage() {
  // const { id } = useParams();
  // console.log("🚀 ~ FinancePage ~ id:", id)

  const [formData, setFormData] = useState(initialFormData);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [privacyPolicyChecked, setPrivacyPolicyChecked] = useState(false);

  const handleChange = <T extends keyof typeof formData>(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      setPrivacyPolicyChecked((prev) => !prev);
    } else {
      setFormData((prev) => {
        for (const key in prev) {
          if (name in prev[key as T]) {
            return {
              ...prev,
              [key]: {
                ...prev[key as T],
                [name]: value,
              },
            };
          }
        }
        return prev;
      });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setIsModalOpen(true);
  };

  return (
    <>
      <Container>
        <section className={`${"section container"} ${cls.pageWrapp}`}>
          <h2>APPLY FOR FINANCE</h2>
          <form onSubmit={handleSubmit}>
            <div className={cls.formBlocksWrapp}>
              {fieldsBlock.map(({ fieldsBlock }, index) => {
                const formDataKey = Object.keys(formData)[
                  index
                ] as keyof typeof formData;

                return (
                  <FormFieldsBlock
                    key={index}
                    title={fieldsBlock.title}
                    handleChange={handleChange}
                    formData={formData[formDataKey]}
                    fields={fieldsBlock.fields}
                  />
                );
              })}
            </div>
            <Button type="submit" text="submit" />
          </form>
        </section>
      </Container>
      {isModalOpen && (
        <ModalWindow closeBtn setIsModalOpen={setIsModalOpen}>
          <ThanksPopup text="Thank you! We have received your application and our team will contact you with further details" />
        </ModalWindow>
      )}
    </>
  );
}

"use client";
import { ChangeEvent, FormEvent, useState } from "react";
// import { useParams } from "next/navigation";
import Button from "@/shared/components/Buttons/Button/Button";
import ModalWindow from "@/shared/components/ModalWindow/ModalWindow";
import ThanksPopup from "@/shared/components/Popups/ThanksPopup/ThanksPopup";
import FormFieldsBlock from "@/modules/FormFieldsBlock/FormField";
import { fieldsBlock } from "./fieldsData";
import { initialFormData } from "./initialState";
import Permission from "@/views/FinancePage/Permission";
import cls from "./styles.module.scss";

export default function FinancePage() {
  // const { id } = useParams();
  // console.log("🚀 ~ FinancePage ~ id:", id)

  const [formData, setFormData] = useState(initialFormData);
  const [checkboxes, setCheckboxes] = useState({
    permission: false,
    sharingPreference: null,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const resetForm = () => {
    setFormData(initialFormData);
    setCheckboxes({
      permission: false,
      sharingPreference: null,
    });
  };

  const handleChange = <T extends keyof typeof formData>(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox" || type === "radio") {
      const { checked } = e.target as HTMLInputElement;
      setCheckboxes((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
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
    console.log("Checkboxes Data:", checkboxes);
    setIsModalOpen(true);

    resetForm();
  };

  return (
    <>
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
          <div className={cls.saveBtnWrapp}>
            <Button
              text="save and continue later"
              color="transparent"
              onClick={() => {
                console.log("🍾");
              }}
            />
          </div>
          <div className={cls.permissionWrapp}>
            <Permission
              handleChange={handleChange}
              permissionChecked={checkboxes.permission}
              sharingPreference={checkboxes.sharingPreference}
            />
            <div className={cls.submitBtnWrapp}>
              <Button type="submit" text="submit" />
            </div>
          </div>
        </form>
      </section>
      {isModalOpen && (
        <ModalWindow closeBtn setIsModalOpen={setIsModalOpen}>
          <ThanksPopup text="Thank you! We have received your application and our team will contact you with further details" />
        </ModalWindow>
      )}
    </>
  );
}

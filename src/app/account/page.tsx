"use client";

import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { redirect } from 'next/navigation'

import Checkbox from "@/shared/components/Checkbox/Checkbox";
import CustomInput from "@/shared/components/CustomInput/CustomInput";

import EditBtn from "@/views/Account/PersonalDetails/EditBtn/EditBtn";
import SecondStep from "@/views/Account/CompleteProfile/SecondStep";
import TitleBlock from "@/views/Account/PersonalDetails/TitleBlock/TitleBlock";

import { step1, step2, step3 } from "./tempData";

import {getCurrentUser, updateUser} from "@/api/auth";

import cls from "./styles.module.scss";

type FormData = {
  [key: string]: string;
};

const initialFormData: FormData = [...step1, ...step2, ...step3].reduce(
  (acc, field) => ({ ...acc, [field.id]: field.value }),
  {}
);

const statusText = {
  unverified: {
    name: "Your profile is unverified",
    nameColor: "#EC531C",
    text: "We have not received your personal details or documents. Please upload them to proceed with verification and gain access to auctions and vehicle reservations"
  },
  inProgress: {
    name: "Verification in Progress",
    nameColor: "#52525B",
    text: "We have received your personal information and documents. They are currently being reviewed for verification. Please wait while we complete this process to enable you to participate in auctions and make vehicle reservations online"
  },
  verified: {
    name: "profile has been Verified",
    nameColor: "#5120B8",
    text: "Your profile has been successfully submitted and verified. This means you can now participate in auctions and reserve vehicles online. If you’d like to request changes to your personal details, please complete the contact form"
  },
}

export default function Account() {
  const [formData, setFormData] = useState({});
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchUser = async()=> {
      try {
        const token = localStorage.getItem("token");;
        const data = await getCurrentUser(token);
        // console.log(data);

        for(const key in initialFormData) {
          const value = data.user[key];
          if(value) {
            initialFormData[key] = value;
          }
        }
        setStatus(data.user.status);
        console.log(initialFormData);
        setFormData(initialFormData);
      }
      catch(error) {
        console.log(error);
      }
    }
    fetchUser();
  }, []);


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
    // setEditingSteps((prev) => ({ ...prev, [step]: false }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await updateUser(formData);
      console.log(data);
    }
    catch(error) {
      console.log(error);
    }
    setEditingSteps({
      step1: false,
      step2: false,
      step3: false,
    });
  };

  if(typeof window !== "undefined" && !localStorage.getItem("token")) {
    redirect("/");
  }

  if(!Object.keys(formData).length) {
    return null;
  }

  return (
      <section>
        {/*@ts-expect-error*/}
        <p className={cls.status} style={{color: statusText[status].nameColor}}><span className={cls.statusText}>status:</span> {statusText[status].name}</p>
        {/*@ts-expect-error*/}
        <p className={cls.statusDescription}>{statusText[status].text}</p>

        <form onSubmit={handleSubmit}>
          {/* Step 1 */}
          <div className={cls.inputsWrapper} style={{marginBottom: 16}}>
            <TitleBlock title="personal details" isEditing={editingSteps.step1}/>

            {step1.map(({id, label, phone}) => (
                <div key={id} className={cls.personalDetailsWrapp}>
                  <CustomInput
                      bordered={editingSteps.step1}
                      phone={phone}
                      id={id}
                      label={label}
                      type="input"
                      required
                      handleChange={handleChange}
                      //@ts-expect-error
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
          <div className={cls.inputsWrapper} style={{marginTop: 16}}>
            <TitleBlock title="Postal Address" isEditing={editingSteps.step3}/>

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
                    formFields2={step3}
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

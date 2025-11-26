import { ChangeEvent } from "react";

import Checkbox from "@/shared/components/Checkbox/Checkbox";

import cls from "./styles.module.scss";

interface PermissionProps {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  permissionChecked: boolean;
  sharingPreference: "allow" | "prohibit" | null;
}

export default function Permission({
  handleChange,
  permissionChecked,
  sharingPreference,
}: PermissionProps) {
  return (
    <>
      <h4 className="titleSmall" style={{ marginBottom: 16 }}>Permission and Consent</h4>
      <p className="textSmall" style={{ marginBottom: 8 }}>
        I hereby consent to the Credit Provider accessing my credit profile from
        the credit bureaus for the purposes of a credit assessment and in the
        event that my loan application is successful, for on-going account
        maintenance purposes, setting limits, development of credit
        tools/products/models and insurance purposes.
      </p>
      <Checkbox
        variant="square"
        id="permission"
        label=" I agree"
        checked={permissionChecked}
        onToggle={handleChange}
      />
      <p className="textSmall" style={{ marginBottom: 8, marginTop: 16 }}>
        Do you consent to your information being shared in order to receive
        marketing regarding insurance and related products?
      </p>
      <div className={cls.checkboxesWrapp}>
        <Checkbox
          type="radio"
          variant="square"
          radioName="sharingPreference"
          label="I agree"
          id="allow"
          checked={sharingPreference === "allow"}
          onToggle={handleChange}
        />
        <Checkbox
          type="radio"
          variant="square"
          radioName="sharingPreference"
          label="I do not agree"
          id="prohibit"
          checked={sharingPreference === "prohibit"}
          onToggle={handleChange}
        />
      </div>
    </>
  );
}

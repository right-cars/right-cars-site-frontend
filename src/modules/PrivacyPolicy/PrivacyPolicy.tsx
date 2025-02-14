import { ChangeEvent } from "react";
import Checkbox from "@/shared/components/Checkbox/Checkbox";
import cls from "./styles.module.scss";

interface PrivacyPolicyProps {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  privacyPolicyChecked: boolean;
}

export default function PrivacyPolicy({
  handleChange,
  privacyPolicyChecked,
}: PrivacyPolicyProps) {
  return (
    <>
      <div className={cls.titleBlock}>
        <p className="btnText">Privacy Policy (Required)</p>
        <div>
          <Checkbox
            variant="square"
            id="privacyPolicy"
            label=" I agree to the privacy policy"
            checked={privacyPolicyChecked}
            onToggle={handleChange}
          />
        </div>
      </div>
      <p className="textSmall">
        I agree that Right Cars can use the information I provide, and may
        disclose it to its authorised Right Cars Staff, contractors and
        associated organisations, for the purpose of ensuring my request is
        processed. Right Cars will not disclose my information to anyone else
        without consent
      </p>
    </>
  );
}

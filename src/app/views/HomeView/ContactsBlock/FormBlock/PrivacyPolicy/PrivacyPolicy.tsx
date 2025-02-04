import { ChangeEvent } from "react";
import cls from "../styles.module.scss";

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
          <div className={cls.checkBoxWrapp}>
            <input
              id="privacyPolicy"
              className={cls.checkBox}
              type="checkbox"
              name="privacyPolicy"
              onChange={handleChange}
              checked={privacyPolicyChecked}
            />
            <label className="textSmall" htmlFor="cloudSyncing">
              I agree to the privacy policy
            </label>
          </div>
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

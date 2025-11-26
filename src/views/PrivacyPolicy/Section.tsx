import Link from "next/link";

import { SectionTypes } from "@/shared/types/privacyPolicy";

import cls from "./styles.module.scss";

export default function Section({ title, text, list, addItem }: SectionTypes) {
  return (
    <div>
      <h3 className="titleSmall">{title}</h3>
      {text && <p className="textMedium">{text}</p>}
      {list && (
        <ul className={cls.list}>
          {list.map((item, index) => (
            <li key={index} className="textMedium">
              {item}
            </li>
          ))}
          {addItem && (
            <li className="textMedium">
              In accordance with our{" "}
              <Link style={{ color: "#5120B8" }} href={"/privacy-policy"}>
                Privacy Policy
              </Link>
              , we may collect and store your personal information, including
              but not limited to voice recordings, images, identity documents,
              contact details, and addresses, within our secured databases
            </li>
          )}
        </ul>
      )}
    </div>
  );
}

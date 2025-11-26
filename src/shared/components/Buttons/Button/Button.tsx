import Image from "next/image";
import classNames from "classnames";

import cls from "./styles.module.scss";

export interface ButtonProps {
  type?: "submit" | "button";
  text: string;
  styles?: string;
  color?: "yellow" | "transparent";
  onClick?: () => void;
  img?: string;
  disabled?: boolean;
}

export default function Button(props: ButtonProps) {
  const {
    type = "button",
    text,
    onClick,
    styles,
    color = "yellow",
    img,
      disabled
  } = props;

  return (
    <div className={classNames(cls.btnWrapp, styles)}>
      <button
          disabled={disabled}
        type={type}
        className={classNames(cls.btn, {
          [cls.yellow]: color === "yellow",
          [cls.transparent]: color === "transparent",
        })}
        onClick={onClick}
      >
        <div className={classNames(cls.txtWrapp, { [cls.reverse]: color === "transparent" })}>
          <p className="btnText">{text}</p>
          {img && <Image src={img} alt="icon" width={20} height={20} />}
        </div>
      </button>
    </div>
  );
}

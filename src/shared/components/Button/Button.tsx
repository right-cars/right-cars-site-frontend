import Image from "next/image";
import cls from "./styles.module.scss";

export interface ButtonProps {
  type?: "submit" | "button";
  text: string;
  styles?: string;
  color?: "yellow" | "transparent";
  onClick?: () => void;
  img?: string;
}

export default function Button(props: ButtonProps) {
  const {
    type = "button",
    text,
    onClick,
    styles,
    color = "yellow",
    img,
  } = props;

  return (
    <div className={`${cls.btnWrapp} ${styles}`}>
      <button
        type={type}
        className={`${cls.btn} ${
          color === "yellow" ? cls.yellow : cls.transparent
        } `}
        onClick={onClick}
      >
        <div
          className={`${cls.txtWrapp} ${
            color === "transparent" && cls.reverse
          }`}
        >
          <p className="btnText">{text}</p>
          {img && <Image src={img} alt="icon" width={20} height={20} />}
        </div>
      </button>
    </div>
  );
}

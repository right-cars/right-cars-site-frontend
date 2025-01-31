import Link from "next/link";
import LogoSvg from "../../../../public/icons/logo.svg";
import { LogoProps } from "@/shared/types/logo";
import cls from "./styles.module.scss";

export default function Logo(props: LogoProps) {
  const { variant } = props;

  return (
    <Link
      aria-label="go to home page"
      href="/"
      className={`${cls.link} ${variant !== "header" && cls.foolWidthLink}`}
    >
      <LogoSvg
        className={
          variant === "header"
            ? cls.headerLogo
            : variant === "footer"
            ? cls.footerLogo
            : cls.burgerLogo
        }
      />
    </Link>
  );
}

import Link from "next/link";
import LogoSvg from "../../../../public/icons/logo.svg";
import cls from "./styles.module.scss";

interface LogoProps {
  variant: "header" | "footer" | "burger";
}

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

import Link from "next/link";
import classNames from "classnames";

import LogoSvg from "@icons/logo.svg";

import cls from "./styles.module.scss";

interface LogoProps {
  variant: "header" | "footer" | "burger";
}

export default function Logo({ variant }: LogoProps) {
  return (
    <Link
      aria-label="go to home page"
      href="/"
      className={classNames(cls.link, { [cls.foolWidthLink]: variant !== "header" })}
    >
      <LogoSvg
        className={classNames({
          [cls.headerLogo]: variant === "header",
          [cls.footerLogo]: variant === "footer",
          [cls.burgerLogo]: variant === "burger",
        })}
      />
    </Link>
  );
}

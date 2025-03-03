"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { footerNavLinks } from "@/shared/utils/routes";

import cls from "./styles.module.scss";

export default function FooterNavigation() {
  const pathname = usePathname();

  return (
    <nav style={{ width: "100%" }}>
      <ul className={cls.linksList}>
        {footerNavLinks.map(({ name, href }, index) => {
          const isActive = pathname === href;

          return (
            <li
              key={index}
              className={`${cls.item} ${isActive && cls.isActive}`}
            >
              <Link href={href}>
                <p className={`${"text"} ${cls.link}`}>{name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

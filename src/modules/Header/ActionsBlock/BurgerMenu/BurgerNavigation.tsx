"use client"

import { usePathname } from "next/navigation";
import Link from "next/link";

import { navLinks } from "@/shared/utils/routes";

import cls from "./styles.module.scss";

export default function BurgerNavigation({handleClick}:{handleClick:()=>void}) {
  const pathname = usePathname();
  return (
    <nav>
      <ul className={cls.linksList}>
        {navLinks.map(({ name, href }, index) => {
          const isActive = pathname === href;
          return (
            <li key={index} className={isActive ? cls.isActive : cls.item}>
              <Link href={href} onClick={handleClick}>
                <p >{name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

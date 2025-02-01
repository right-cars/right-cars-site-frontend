"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import cls from "./styles.module.scss";
import { dropdownLinks, headerNavLinks } from "@/shared/utils/routes";

export default function Navigation() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav>
      <ul className={cls.linksList}>
        {headerNavLinks.map(({ name, href }, index) => {
          const isActive = pathname === href;
          return name === "services" ? (
            <li
              key={index}
              className={cls.dropdown}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <h6 className={cls.link}>{name}</h6>
              {dropdownOpen && (
                <ul className={cls.dropdownMenu}>
                  {dropdownLinks.map(({ name, href }, subIndex) => (
                    <li key={subIndex} className={isActive ? cls.isActive : ""}>
                      <Link href={href} >
                        <h6 className={cls.link}>{name}</h6>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <li key={index} className={isActive ? cls.isActive : ""}>
              <Link href={href}>
                <h6 className={cls.link}> {name}</h6>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

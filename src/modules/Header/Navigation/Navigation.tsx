"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { headerNavLinks } from "@/shared/utils/routes";

import cls from "./styles.module.scss";

export default function Navigation() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
      setDropdownOpen(false);
  };

  return (
    <nav>
      <ul className={cls.linksList}>
        {headerNavLinks.map(({ name, href, subLinks }, index) => {
          const isActive = pathname === href;
          return subLinks ? (
            <li
              key={index}
              className={cls.dropdown}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <h6 className={cls.link}>{name}</h6>
              {dropdownOpen && (
                <ul className={cls.dropdownMenu}>
                  {subLinks.map(({ name, href }, subIndex) => (
                    <li key={subIndex} className={isActive ? cls.isActive : ""}>
                      <Link href={href}>
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

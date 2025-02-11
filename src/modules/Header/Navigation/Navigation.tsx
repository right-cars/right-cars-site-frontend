"use client";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import cls from "./styles.module.scss";
import { dropdownLinks, headerNavLinks } from "@/shared/utils/routes";

export default function Navigation() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 1000);
  };

  return (
    <nav>
      <ul className={cls.linksList}>
        {headerNavLinks.map(({ name, href }, index) => {
          const isActive = pathname === href;
          return name === "services" ? (
            <li
              key={index}
              className={cls.dropdown}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <h6 className={cls.link}>{name}</h6>
              {dropdownOpen && (
                <ul className={cls.dropdownMenu}>
                  {dropdownLinks.map(({ name, href }, subIndex) => (
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

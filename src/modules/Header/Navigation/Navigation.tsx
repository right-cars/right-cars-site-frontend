"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import cls from "./styles.module.scss";

const navLinks = [
  { name: "showroom", href: "/showroom" },
  { name: "Auction", href: "/auction" },
  { name: "about us", href: "/#about" },
  { name: "services", href: "#" },
  { name: "FaQ", href: "/faq" },
  { name: "contact us", href: "/#contacts" },
];

const dropdownLinks = [
  { name: "book a car service", href: "/car-service" },
  { name: "book a test drive", href: "/test-drive" },
  { name: "finance", href: "/finance" },
  { name: "delivery", href: "/delivery" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav>
      <ul className={cls.linksList}>
        {navLinks.map(({ name, href }, index) => {
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

"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

import { headerNavLinks } from "@/shared/utils/routes";

import cls from "./styles.module.scss";

export default function Navigation() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => setDropdownOpen(true);
  const handleMouseLeave = () => setDropdownOpen(false);

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
              <p className={cls.link}>{name}</p>
              <motion.ul
                className={cls.dropdownMenu}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: dropdownOpen ? 1 : 0, y: dropdownOpen ? 0 : -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {subLinks.map(({ name, href }, subIndex) => (
                  <li key={subIndex} className={isActive ? cls.isActive : ""}>
                    <Link href={href}>
                      <p className={cls.link}>{name}</p>
                    </Link>
                  </li>
                ))}
              </motion.ul>
            </li>
          ) : (
            <li key={index} className={isActive ? cls.isActive : ""}>
              <Link href={href}>
                <p className={cls.link}> {name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

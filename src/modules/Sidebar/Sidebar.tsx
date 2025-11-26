"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import CloseSvg from "@icons/close.svg";

import LogOutBtn from "./LogOutBtn";
import { menuItems } from "./menuItems";

import cls from "./styles.module.scss";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isProfileComplete = true;

  const pathname = usePathname();

  useEffect(() => {
    const checkSidebar = () => {
      if (typeof window !== "undefined") {
        const isSmallScreen = window.matchMedia("(max-width: 1024px)").matches;
        if (isSmallScreen) {
          setIsSidebarOpen(localStorage.getItem("sidebarOpen") === "true");
        } else {
          setIsSidebarOpen(false);
        }
      }
    };

    checkSidebar();
    if (typeof window !== "undefined") {
      window.addEventListener("storage", checkSidebar);
      window.addEventListener("resize", checkSidebar);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("storage", checkSidebar);
        window.removeEventListener("resize", checkSidebar);
      }
    };
  }, []);

  const handleCloseSidebar = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("sidebarOpen", "false");
      window.dispatchEvent(new Event("storage"));
    }
  };

  return (
    <aside className={`${cls.aside} ${!isSidebarOpen && cls.tabAside}`}>
      <div className={cls.titleBlock}>
        <p className="titleMedium">my Account</p>
        <button onClick={handleCloseSidebar}>
          <CloseSvg className={cls.closeSvg} />
        </button>
      </div>

      <div className={cls.nawWrapp}>
        <nav className={cls.nav}>
          {menuItems.map((item, index) => {
            const isDisabled = item.path.includes("finance") || item.path.includes("auctions");
            const itemName =
              index === 0 && !isProfileComplete
                ? "Complete your profile"
                : item.name;
            const itemPath =
              index === 0 && !isProfileComplete
                ? "/account"
                : item.path;
            return (
              <Link
                key={item.path}
                href={isDisabled ? "#" : itemPath}
                onClick={
                  isDisabled ? (e) => e.preventDefault() : handleCloseSidebar
                }
              >
                <div
                  className={`${cls.item} ${
                    pathname === item.path && !isDisabled && cls.active
                  } ${isDisabled && cls.disabled}`}
                >
                  {item.svg}
                  <p className="titleTiny" style={{ textTransform: "none" }}>
                    {itemName}
                  </p>
                </div>
              </Link>
            );
          })}
        </nav>
        <LogOutBtn />
      </div>
    </aside>
  );
};

export default Sidebar;

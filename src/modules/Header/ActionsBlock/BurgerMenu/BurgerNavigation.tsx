import { usePathname } from "next/navigation";
import Link from "next/link";
import cls from "./styles.module.scss";

const navLinks = [
  { name: "showroom", href: "/showroom" },
  { name: "Auction", href: "/auction" },
  { name: "about us", href: "/#about" },
  { name: "book a car service", href: "/car-service" },
  { name: "book a test drive", href: "/test-drive" },
  { name: "finance", href: "/finance" },
  { name: "delivery", href: "/delivery" },
  { name: "FaQ", href: "/faq" },
  { name: "contact us", href: "/#contacts" },
];

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

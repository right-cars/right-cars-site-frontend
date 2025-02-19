import Link from "next/link";

import { footerNavLinks } from "@/shared/utils/routes";

import cls from "./styles.module.scss";

export default function FooterNavigation() {
  return (
    <nav style={{width:"100%"}}>
      <ul className={cls.linksList}>
        {footerNavLinks.map(({ name, href }, index) => (
          <li key={index} className={cls.item}>
            <Link href={href}>
              <h6 className={cls.link}>{name}</h6>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

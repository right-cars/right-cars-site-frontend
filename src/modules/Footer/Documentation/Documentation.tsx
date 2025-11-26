import Link from "next/link";

import cls from "./styles.module.scss";

const data = [
  {
    name: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    name: "terms of use",
    href: "/terms-of-use",
  },
  {
    name: "TERMS OF SALE",
    href: "/terms-of-sale",
  },
  {
    name: "auction rules",
    href: "/auction-rules",
  },
];

export default function Documentation() {
  return (
    <ul className={cls.documentsList}>
      {data.map(({ name, href }, index) => (
        <li key={index}>
          <Link href={href} className={cls.link}>
            <p className="text">{name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

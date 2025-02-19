import Link from "next/link";

import cls from "./styles.module.scss";

const data = [
  {
    name: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    name: "website Privacy Policy",
    href: "/website-privacy-policy",
  },
  {
    name: "terms of use",
    href: "/terms-of-use",
  },
  {
    name: "competition rules",
    href: "/competition-rules",
  },
  {
    name: "return policy",
    href: "/return-policy",
  },
];

export default function Documentation() {
  return (
    <ul className={cls.documentsList}>
      {data.map(({ name, href }, index) => (
        <li key={index}>
          <Link href={href} className={cls.link}>
            <h6>{name}</h6>
          </Link>
        </li>
      ))}
    </ul>
  );
}

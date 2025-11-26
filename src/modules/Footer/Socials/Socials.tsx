import Image from "next/image";
import Link from "next/link";

import cls from "./styles.module.scss";

const data = [
  {
    img: "/icons/socials/whatsapp.svg",
    href: "https://wa.me/27679990000",
  },
  {
    img: "/icons/socials/facebook.svg",
    href: "https://www.facebook.com/",
  },
  {
    img: "/icons/socials/email.svg",
    href: "mailto:info@right-cars.co.za",
  },
  {
    img: "/icons/socials/phone.svg",
    href: "tel:0114629045",
  },
];

export default function Socials() {
  return (
    <ul className={cls.socList}>
      {data.map(({ img, href }, index) => (
        <li key={index}>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={href}
            className={cls.link}
          >
            <Image src={img} alt="social icon" width={36} height={36} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

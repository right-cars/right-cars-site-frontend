import Image from "next/image";
import Link from "next/link";
import cls from "./styles.module.scss";

const data = [
  {
    img: "/icons/socials/whatsapp.svg",
    href: "https://web.whatsapp.com/",
  },
  {
    img: "/icons/socials/facebook.svg",
    href: "https://www.facebook.com/",
  },
  {
    img: "/icons/socials/email.svg",
    href: "test.mail@gmail.com",
  },
  {
    img: "/icons/socials/viber.svg",
    href: "https://www.viber.com/ua/",
  },
];

export default function Socials() {
  return (
    <ul className={cls.socList}>
      {data.map(({ img, href }, index) => {
        const isEmail = href.includes("@");
        return (
          <li key={index}>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={isEmail ? `mailto:${href}` : href}
              className={cls.link}
            >
              <Image src={img} alt="social icon" width={36} height={36} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

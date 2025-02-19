import Link from "next/link";

import Phone from "@icons/contacts/phone.svg";
import WhatsApp from "@icons/contacts/whatsapp.svg";
import Email from "@icons/contacts/email.svg";
import Address from "@icons/contacts/address-marker.svg";

import cls from "../styles.module.scss";

const data = [
  {
    img: <Phone className={cls.svg} />,
    href: "tel:0114629045",
    txt: "011 462 9045",
  },
  {
    img: <WhatsApp className={cls.svg} />,
    href: "https://wa.me/0114629045",
    txt: "011 462 9045",
  },
  {
    img: <Email className={cls.svg} />,
    href: "mailto:info@right-cars.co.za",
    txt: "info@right-cars.co.za",
  },
  {
    img: <Address className={cls.svg} />,
    href: "https://www.google.com/maps?q=234+Malibongwe+Drive,+North+Riding,+Randburg,+Jhb,+Gauteng",
    txt: "234 Malibongwe Drive, North Riding, Randburg, Jhb, Gauteng",
  },
];

export default function ContactsInfo() {
  return (
    <div className={cls.blockWrapp}>
      <ul className={cls.contactsList}>
        {data.map(({ img, href, txt }, index) => (
          <li key={index}>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={href}
              className={`${cls.iconWithTextBlock} ${cls.link}`}
            >
              {img}
              <h5 className={cls.txt}>{txt}</h5>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

import { temporary } from "./temporary";
import cls from "./styles.module.scss";

export default function CarDetails() {
  return (
    <ul className={cls.detailsContainer}>
      {temporary.map(({ title, details }, index) => (
        <li key={index} className={cls.detailsWrapper}>
          <p className="titleMedium" style={{ marginBottom: 24 }}>{title}</p>
          <ul className={cls.detailsList}>
            {details.map(({ href, name, value }, index) => (
              <li key={index} className={cls.item}>
                <p className={cls.itemName}>{name}</p>
                <div className={cls.valueWrap}>
                  <p className="titleSmall">{value}</p>
                  {href && (
                    <Link href={href}>
                      <Image
                        src="/icons/car-page/link.svg"
                        alt="link icon"
                        width={12}
                        height={12}
                      />
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

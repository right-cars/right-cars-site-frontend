import Image from "next/image";

import cls from "./styles.module.scss";

type Details = {
  img: string;
  title: string;
  value: string;
};

interface FirstInfoProps {
  year: number;
  model: string;
  details: Details[];
}

export default function FirstInfoBlock({
  year,
  model,
  details,
}: FirstInfoProps) {
  return (
    <div className={cls.infoBlock}>
      <div className={cls.titleBlock}>
        <p className="titleMedium">{year}</p>
        <p className="titleMedium">{model}</p>
      </div>
      <ul className={cls.details}>
        {details.map(({ img, title, value }, index) => (
          <li key={index} className={cls.detailsItem}>
            <div className={cls.titleDetailsBlock}>
              <Image src={img} alt="icon" width={44} height={44} />
              <h5 className="titleTiny">{title}</h5>
            </div>
            <p className="titleSmall">{value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

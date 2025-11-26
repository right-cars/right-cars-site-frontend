import Image from "next/image";

import cls from "./styles.module.scss";

interface SimpleCardListProps {
  data: { title: string; descr: string }[];
  title?: string;
  minHeight?: number;
  delivery?: boolean;
  className?: string;
  titleStyles?: string;
}

export default function SimpleCardList({
  data,
  title,
  minHeight,
  delivery,
  className = "",
  titleStyles = "",
}: SimpleCardListProps) {
  return (
    <section className={`section container ${className}`}>
      {title && <h2 className={`${cls.title} ${titleStyles} `}>{title}</h2>}

      <ul className={cls.cardList}>
        {data.map(({ title, descr }, index) => (
          <li key={index} className={cls.card} style={{ minHeight: minHeight }}>
            <Image
              src="/icons/car-page/arrow-yellow.svg"
              alt="arrow icon"
              width={24}
              height={24}
              unoptimized
            />
            <h4 className={`${"smallTitle"} ${cls.title}`}>{title}</h4>
            <p className="textMedium" style={{ textTransform: "lowercase" }}>
              {descr}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

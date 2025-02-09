import Image from "next/image";
import { data } from "./data";
import cls from "./styles.module.scss";

export default function HowItWorks() {
  return (
    <section className="section container">
      <h2>how it works</h2>
      <ul className={cls.cardList}>
        {data.map(({ title, descr }, index) => (
          <li key={index} className={cls.card}>
            <Image
              src="/icons/car-page/arrow-yellow.svg"
              alt="arrow icon"
              width={24}
              height={24}
            />
            <h4 className={cls.title}>{title}</h4>
            <p className="textMedium">{descr}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

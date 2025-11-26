import Image from "next/image";

import { data } from "./data";

import cls from "./styles.module.scss";

export default function DeliveryList() {
  return (
    <section className={`${"container section"} ${cls.wrapper}`}>
      <ul className={cls.list}>
        {data.map(({ title, descr }, index) => (
          <li key={index} className={cls.item}>
            <h4 className="titleSmall" style={{ color: "#5120B8",width:"224px" }}>{title}</h4>
            <div className={cls.descrWrapp}>
              <p className="textMedium">{descr}</p>
              <Image
                src="/icons/verify.svg"
                alt="verify icon"
                width={32}
                height={32}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

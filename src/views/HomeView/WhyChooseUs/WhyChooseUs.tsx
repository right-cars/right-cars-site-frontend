import Image from "next/image";

import { data } from "./data";

import cls from "./styles.module.scss";

export default function WhyChooseUs() {
  return (
    <section className="section container">
      <h2>why choose us?</h2>
      <div className={cls.wrapper}>
        <div className={cls.leftBlock}>
          <div className={cls.leftTitleBlock}>
            <Image
              src="/icons/home/why-choose-us/svg1.svg"
              alt="icon"
              width={55}
              height={55}
              className={cls.svg}
            />
            <h3>
              Transparent
              <br />
              Pricing
            </h3>
          </div>

          <p className="textMedium">
            enjoy straightforward pricing with no hidden fees and clear vehicle
            histories
          </p>
        </div>
        <ul className={cls.rightBlock}>
          {data.map(({ svg, title, descr, width, height }, index) => (
            <li key={index} className={cls.card}>
              <div className={cls.titleBlock}>
                <h3
                  className={cls.cardTitle}
                  dangerouslySetInnerHTML={{ __html: title }}
                />
                <Image
                  src={svg}
                  alt="icon"
                  width={width}
                  height={height}
                  className={cls.svg}
                />
              </div>
              <p className="textMedium">{descr}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

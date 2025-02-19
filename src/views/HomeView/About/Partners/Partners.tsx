import Image from "next/image";

import cls from "./styles.module.scss";

const svgs = [
  {
    img: "/icons/home/partners/img1.svg",
    width: 201,
    height: 147,
  },
  {
    img: "/icons/home/partners/img2.svg",
    width: 112,
    height: 112,
  },
  {
    img: "/icons/home/partners/img3.svg",
    width: 176,
    height: 78,
  },
];

export default function Partners() {
  return (
    <div className={cls.wrapper}>
      <div className={cls.titleBlock}>
        <h3>We Are Part of The Following Organisations:</h3>
      </div>
      <ul className={cls.partners}>
        {svgs.map(({ img, width, height }, index) => (
          <li key={index} className={cls.item}>
            <Image
              src={img}
              alt="logo"
              width={width}
              height={height}
              className={cls.svg}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

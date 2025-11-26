import Image from "next/image";
import Link from "next/link";

import cls from "./styles.module.scss";

const imgs = [
  "/images/home/banner/img2.webp",
  "/images/home/banner/img3.webp",
  "/images/home/banner/img4.webp",
];

export default function AddBlock() {
  return (
    <div className={cls.addBlock}>
      <Link href={"/showroom"} className={cls.allCars}>
        <div className={cls.animatedCard} data-type="first">
          <ul className={cls.imgsBlock}>
            {imgs.map((img, index) => (
              <li key={index}>
                <Image
                  src={img}
                  alt="car"
                  width={158}
                  height={102}
                  className="img"
                />
              </li>
            ))}
          </ul>
          <p className={cls.title}>vehicles</p>
        </div>
        <Image
          src="/images/home/banner/absolute-img.png"
          alt="scotch tape"
          width={135}
          height={135}
          className={cls.absoluteImg}
        />
      </Link>
      <div className={cls.typeCars}>
        <Link href={"/showroom"} className={cls.imgWrapp}>
          <Image
            src="/images/home/banner/absolute-img.png"
            alt="scotch tape"
            width={135}
            height={135}
            className={cls.absoluteImgSecond}
          />
          <div className={cls.animatedCard} data-type="second">
            <Image
              src="/images/home/banner/img5.webp"
              alt="car"
              width={158}
              height={123}
              className="img"
            />
            <p className={`${cls.title} ${cls.titleSecond}`}>bakkie</p>
          </div>
        </Link>
        <Link href={"/showroom"} className={cls.imgWrappSecond}>
          <Image
            src="/images/home/banner/absolute-img.png"
            alt="scotch tape"
            width={135}
            height={135}
            className={cls.absoluteImgThird}
          />
          <div className={cls.animatedCard} data-type="third">
            {" "}
            <Image
              src="/images/home/banner/img6.webp"
              alt="car"
              width={205}
              height={108}
              className="img"
            />
            <p className={`${cls.title} ${cls.titleThird}`}>commercial</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

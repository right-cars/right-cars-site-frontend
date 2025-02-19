import Image from "next/image";

import cls from "./styles.module.scss";

interface TeamCardProps {
  img: string;
  position: string;
  name: string;
  descr: string;
}

export default function TeamCard({
  img,
  position,
  name,
  descr,
}: TeamCardProps) {
  return (
    <li className={cls.card}>
      <div className={cls.txtBlock}>
        <p className="text" style={{ marginBottom: 4 }}>{position}</p>
        <p
          className="btnText"
          style={{ color: "#5120B8", marginBottom: 24 }}
        >
          {name}
        </p>
        <p className="textSmall">{descr}</p>
      </div>
      <div className={cls.imgBlock}>
        <Image
          src={img}
          alt={position}
          width={150}
          height={160}
          className={cls.img}
        />
      </div>
    </li>
  );
}

import Image from "next/image";

import { temporary } from "./temporary";
import FirstInfoBlock from "./InfoBlocks/FirstInfoBlock";
import SecondInfoBlock from "./InfoBlocks/SecondInfoBlock";

import cls from "./styles.module.scss";

export default async function Reserve({ id }: { id: string }) {
  console.log("🚀 ~ id:", id);
  return (
    <section className={`${"section container"} ${cls.wrapper}`}>
      <div className={cls.imgWrapp}>
        <Image
          src={temporary.img}
          alt="car"
          width={752}
          height={551}
          className={cls.img}
        />
      </div>
      <div className={cls.infoBlcok}>
        <FirstInfoBlock price={temporary.price} />
        <SecondInfoBlock />
      </div>
    </section>
  );
}

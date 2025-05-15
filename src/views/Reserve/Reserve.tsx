import Image from "next/image";

// import { temporary } from "./temporary";
import FirstInfoBlock from "./InfoBlocks/FirstInfoBlock";
import SecondInfoBlock from "./InfoBlocks/SecondInfoBlock";

import cls from "./styles.module.scss";

// @ts-expect-error
export default async function Reserve({ data }) {

  return (
    <section className={`${"section container"} ${cls.wrapper}`}>
      <div className={cls.imgWrapp}>
        <Image
          src={data.imageUrls[0]}
          alt="car"
          width={752}
          height={551}
          className={cls.img}
        />
      </div>
      <div className={cls.infoBlcok}>
        <FirstInfoBlock price={`R ${data.price}`} />
        <SecondInfoBlock />
      </div>
    </section>
  );
}

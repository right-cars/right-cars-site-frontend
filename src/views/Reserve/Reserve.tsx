
// import { temporary } from "./temporary";
//
// import Image from "next/image";

// import { temporary } from "./temporary";

import FirstInfoBlock from "./InfoBlocks/FirstInfoBlock";
import SecondInfoBlock from "./InfoBlocks/SecondInfoBlock";

import cls from "./styles.module.scss";

//@ts-expect-error
export default function Reserve({ data }) {
  return (
    <div className={cls.infoBlcok}>
      <FirstInfoBlock
        price={`R ${Number(data.price.split(",")[0]).toLocaleString("en-US")}`}
      />
      <SecondInfoBlock />
    </div>
  );
}

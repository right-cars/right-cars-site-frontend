import FirstInfoBlock from "./FirstInfoBlock";
import SecondInfoBlock from "./SecondInfoBlock";
import { temporaryData } from "./temporaryData";

import cls from "./styles.module.scss";

export default function CarInfo({ pageId }: { pageId: string }) {
  const data = temporaryData;
  return (
    <div className={cls.wrapper}>
      <FirstInfoBlock
        year={data.year}
        model={data.model}
        details={data.details}
      />
      <SecondInfoBlock price={data.price} pageId={pageId} />
    </div>
  );
}

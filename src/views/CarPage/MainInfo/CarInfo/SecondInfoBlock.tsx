import Link from "next/link";
import Button from "@/shared/components/Buttons/Button/Button";
import cls from "./styles.module.scss";

interface SecondInfoProps {
  price: string;
  pageId: string;
}

export default function SecondInfoBlock({ price, pageId }: SecondInfoProps) {
  return (
    <div className={cls.infoBlock}>
      <div className={cls.secondTitleBlock}>
        <h3>{price}</h3>
        <p className="textMedium">including vat</p>
      </div>
      <div className={cls.brnsWrapp}>
        <Link href={`/showroom/${pageId}/reserve`}>
          <Button text="reserve now" img="/icons/endContent.svg" />
        </Link>

        <Link href={`/showroom/${pageId}/finance`}>
          <Button text="get finance" color="transparent" />
        </Link>
      </div>
    </div>
  );
}

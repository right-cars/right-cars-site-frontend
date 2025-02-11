import Link from "next/link";
import Image from "next/image";
import Button from "@/shared/components/Buttons/Button/Button";
import cls from "./style.module.scss";

interface ServicesPageBannerProps {
  title: string;
  txt: string;
  btn?: boolean;
  img: string;
}

export default function ServicesPageBanner({
  title,
  txt,
  btn,
  img,
}: ServicesPageBannerProps) {
  return (
    <section className={`${"container"} ${cls.wrapper}`}>
      <div className={cls.txtBlock}>
        <h2 className={cls.title}>{title}</h2>
        <p className="textMedium">{txt}</p>
        {btn && (
          <Link href="/showroom" className={cls.btnWrapp}>
            <Button text="chose a vehicle for finance" />
          </Link>
        )}
      </div>
      <div className={cls.imgBlock}>
        <Image
          src={img}
          alt="image"
          width={560}
          height={374}
          className={cls.img}
        />
      </div>
    </section>
  );
}

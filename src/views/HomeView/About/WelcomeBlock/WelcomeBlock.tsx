import Image from "next/image";

import cls from "./styles.module.scss";

export default function WelcomeBlock() {
  return (
    <div className={cls.wrapper}>
      <div className={cls.txtBlock}>
        <h2 className={cls.title}>Welcome to Right Cars</h2>
        <p className="textMedium">
          founded in 2006, we are a trusted dealership specializing in
          high-quality used cars. our commitment to customer satisfaction has
          helped us build a strong reputation for providing reliable vehicles
          and outstanding service to our valued clients. with an extensive
          inventory featuring over 300 vehicles, we offer a diverse selection to
          meet your needs
        </p>
      </div>
      <div className={cls.imgBlock}>
        <Image
          src="/images/home/about/welcome.webp"
          alt="couple choosing a car"
          width={560}
          height={366}
          className={cls.img}
        />
      </div>
    </div>
  );
}

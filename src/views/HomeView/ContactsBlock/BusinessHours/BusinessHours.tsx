import Image from "next/image";

import cls from "../styles.module.scss";

export default function BusinessHours() {
  return (
    <div className={cls.blockWrapp}>
      <div className={cls.iconWithTextBlock}>
        <Image
          src="/icons/contacts/time.svg"
          alt="time icon"
          width={40}
          height={40}
          className={cls.svg}
        />
        <p className={cls.txt}>Business Hours:</p>
      </div>
      <div className={cls.hours}>
        <p className={cls.txt}>Monday to Friday: 9 AM - 6 PM</p>
        <p className={cls.txt}>Saturday: 9 AM - 3 PM</p>
        <p className={cls.txt}>Sunday: Closed</p>
      </div>
    </div>
  );
}

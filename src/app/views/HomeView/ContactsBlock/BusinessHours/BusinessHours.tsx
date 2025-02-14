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
        <h5 className={cls.txt}>Business Hours:</h5>
      </div>
      <div className={cls.hours}>
        <h5 className={cls.txt}>Monday to Friday: 9 AM - 6 PM</h5>
        <h5 className={cls.txt}>Saturday: 9 AM - 3 PM</h5>
        <h5 className={cls.txt}>Sunday: Closed</h5>
      </div>
    </div>
  );
}

import Link from "next/link";

import cls from "./styles.module.scss";

export default function SecondInfoBlock() {
  return (
    <div className={cls.info} style={{ padding: 16 }}>
      <p className="textSmall">
        Please read the Right Cars&nbsp;
        <Link href={"/"} className={cls.link}>
          Terms of Sale&nbsp;
        </Link>
        carefully. By proceeding with the transaction, you (the buyer) are
        entering into a binding agreement with RightCars. Please only proceed if
        you agree to all of these terms and conditions.
      </p>
    </div>
  );
}

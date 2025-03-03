import Image from "next/image";
import Link from "next/link";

import BurgerBtn from "./BurgerBtn/BurgerBtn";
import LoginBtn from "./LoginBtn/LoginBtn";

import cls from "./styles.module.scss";

export default function ActionsBlock() {
  const isLoggedIn = false;

  return (
    <div className={cls.wrapper}>
      <div className={cls.actions}>
        {isLoggedIn && (
          <Link href="/favorites" className={cls.link}>
            <Image
              src="/icons/heart.svg"
              alt="favorites icon"
              width={20}
              height={20}
            />
          </Link>
        )}

        <LoginBtn isLoggedIn={isLoggedIn} />
      </div>

      <BurgerBtn />
    </div>
  );
}

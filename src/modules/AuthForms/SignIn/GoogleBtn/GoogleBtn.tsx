import Image from "next/image";

import cls from "./styles.module.scss";

export default function GoogleBtn() {
  return (
    <button className={cls.btn}>
      <Image src="/icons/google.svg" alt="google icon" width={32} height={32} />
      <p className={cls.txt}>Continue with Google</p>
    </button>
  );
}

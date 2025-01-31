import Image from "next/image";
import cls from "../styles.module.scss";

export default function LoginBtn() {
    const signIn = true;
    const userName="temp name"

  return (
    <button onClick={() => {console.log("🥂")}} type="button" className={cls.loginBtn}>
      <Image src="/icons/user.svg" alt="login icon" width={29} height={22} />
      <h6 className={cls.name}>{signIn ? userName : "Login"}</h6>
    </button>
  );
}

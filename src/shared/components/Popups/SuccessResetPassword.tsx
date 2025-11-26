import Image from "next/image";

import Button from "@/shared/components/Buttons/Button/Button";

import cls from "./styles.module.scss";

interface Props {
  setPopupOpen: (isOpen: boolean) => void;
  setSignInOpen: (isOpen: boolean) => void;
}

export default function SuccessResetPassword({
  setPopupOpen,
  setSignInOpen,
}: Props) {
  return (
    <div className={cls.wrapper}>
      <div className={cls.titleWrapp}>
        <Image src="/icons/verify.svg" alt="icon" width={61} height={61} />
        <h2 style={{marginBottom:0}}>Your password has been reset successfully. Now you can log in</h2>
      </div>

      <Button
        text="log in"
        onClick={() => {
          setPopupOpen(false);
          setSignInOpen(true);
        }}
      />
    </div>
  );
}

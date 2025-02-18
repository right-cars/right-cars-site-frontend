import { useEffect } from "react";
import Button from "../Buttons/Button/Button";
import cls from "./styles.module.scss";
import { useRouter } from "next/navigation";

interface Props {
  setPopupOpen: (isOpen: string | null) => void;
  email: string;
}

export default function VerifyingPopup({ email, setPopupOpen }: Props) {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("account/complete-profile");
      setPopupOpen(null);
    }, 2000);

    return () => clearTimeout(timer);
  }, [router, setPopupOpen]); //тимчасова штука

  return (
    <div className={cls.wrapper}>
      <h2 style={{ marginBottom: 32 }}>verifying your email addres</h2>
      <h6 className={`${cls.txt}`}>a verification email was sent to </h6>
      <h4
        style={{ color: "v.$primary", fontWeight: 700, display: "inline" }}
      >
        {email}
      </h4>
      <p className="textMedium" style={{ marginTop: 8, marginBottom: 32 }}>
        Click on the link sent to your email to verify your account
      </p>
      <Button
        text="resend verification email"
        color="transparent"
        onClick={() => {
          console.log("🍾");
        }}
      />
    </div>
  );
}

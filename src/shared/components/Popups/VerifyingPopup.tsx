import Button from "../Buttons/Button/Button";
import cls from "./styles.module.scss";

export default function VerifyingPopup({ email }: { email: string }) {
  return (
    <div className={cls.wrapper}>
      <h2 style={{ marginBottom: 32 }}>verifying your email addres</h2>
      <h6 className={`${"textMedium"} ${cls.txt}`}>
        a verification email was sent to{" "}
        <span style={{ color: "var(--purple)" }}>{email}</span>
      </h6>
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

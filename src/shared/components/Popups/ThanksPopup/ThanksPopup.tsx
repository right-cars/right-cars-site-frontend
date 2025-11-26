import cls from "./styles.module.scss";

export default function ThanksPopup({ text }: { text: string }) {
  return (
    <div className={cls.wrapper}>
      <h2 style={{ marginBottom: 32 }}>Thank you !</h2>
      <p className={`${"textMedium"} ${cls.txt}`}>{text}</p>
    </div>
  );
}

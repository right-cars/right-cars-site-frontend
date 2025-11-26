import cls from "./styles.module.scss";

export default function Copyright() {
  return (
    <div className={cls.wrapper}>
      <p className="textSmall">
        All&nbsp;Rights&nbsp;Reserved&nbsp;©&nbsp;Copyright&nbsp;2024
      </p>
      <p className={`textSmall ${cls.text}`}>
        234 Malibongwe Drive, North Riding, Randburg, Jhb,&nbsp;Gauteng
      </p>
    </div>
  );
}

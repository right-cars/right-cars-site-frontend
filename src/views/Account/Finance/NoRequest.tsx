import cls from "./styles.module.scss";

export default function NoRequest() {
  return (
    <div className={cls.wrapp}>
      <h4 className="titleSmall" style={{ marginBottom: 12 }}>
        No funding requests found
      </h4>
      <p className="textMedium">
        once you submit a financing application, you can track its status right
        here
      </p>
    </div>
  );
}

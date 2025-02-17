import Svg5 from "../../../public/icons/account/svg5.svg";
import cls from "./styles.module.scss";

export default function LogOutBtn() {
  const handleLogOut = () => {
    console.log("🍷");
  };
  return (
    <button className={cls.logOutBtn} onClick={handleLogOut}>
      <div className={cls.item}>
        <Svg5 className={cls.svg} />
        <h5 style={{ textTransform: "none" }}>Log Out</h5>
      </div>
    </button>
  );
}

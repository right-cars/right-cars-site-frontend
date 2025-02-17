import Svg1 from "../../../public/icons/account/svg1.svg";
import Svg2 from "../../../public/icons/account/svg2.svg";
import Svg3 from "../../../public/icons/account/svg3.svg";
import Svg4 from "../../../public/icons/account/svg4.svg";
import cls from "./styles.module.scss";

export const menuItems = [
    {
      name: "Personal details",
      path: "/account",
      svg: <Svg1 className={cls.svg} />,
    },
    {
      name: "Documents",
      path: "/account/documents",
      svg: <Svg2 className={cls.svg} />,
    },
    {
      name: "My finance applications",
      path: "/account/finance",
      svg: <Svg3 className={cls.svg} />,
    },
    {
      name: "My auctions",
      path: "/account/auctions",
      svg: <Svg4 className={cls.svg} />,
    },
  ];
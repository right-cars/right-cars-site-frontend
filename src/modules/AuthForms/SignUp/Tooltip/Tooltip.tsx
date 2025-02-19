import Image from "next/image";

import cls from "./styles.module.scss";

const tooltips = [
  "One Uper Case",
  "One number",
  "One lower Case",
  "One specail symbol",
];

export default function Tooltip() {
  return (
    <div className={cls.passwordTooltip}>
      <ul className={cls.list}>
        {tooltips.map((tooltip, index) => (
          <li key={index} className={cls.item}>
            <Image src="/icons/tick.svg" alt="tick icon" width={8} height={6} />
            <p className={`${"textSmall"} ${cls.txt}`}>
              {tooltip}
            </p>
          </li>
        ))}
        <li className={cls.item}>
          <Image src="/icons/tick.svg" alt="tick icon" width={8} height={6} />
          <p className={`${"textSmall"} ${cls.txt}`}>
            minimum 6 characters
          </p>
        </li>
      </ul>
    </div>
  );
}

import { NestedListTypes } from "@/shared/types/privacyPolicy";

import cls from "./styles.module.scss";

export default function NestedList({ title, items }: NestedListTypes) {
  return (
    <div>
      <h3 className="titleSmall">{title}</h3>
      <ul className={cls.list} style={{gap:24}}>
        {items.map(({ item, subItems }, index) => (
          <li key={index} className="textMedium">
            {item}
            {subItems && (
              <ul className={cls.list} >
                {subItems.map((subItem, subIndex) => (
                  <li key={subIndex}>{subItem}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

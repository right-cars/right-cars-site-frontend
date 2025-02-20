import { TabsProps, TabType } from "@/shared/types/applicationsTab";

import cls from "./styles.module.scss";

const tabsData: { name: string; type: TabType }[] = [
  { name: "In Progress", type: "inProgress" },
  { name: "Completed", type: "completed" },
];

export default function Tabs({ activeTab, setActiveTab }: TabsProps) {
  return (
    <ul className={cls.tabsWrapp}>
      {tabsData.map(({ name, type }) => (
        <li
          key={type}
          className={`${cls.tab} ${activeTab === type ? cls.active : ""}`}
          onClick={() => setActiveTab(type)}
        >
          <p className="titleSmall">{name}</p>
        </li>
      ))}
    </ul>
  );
}

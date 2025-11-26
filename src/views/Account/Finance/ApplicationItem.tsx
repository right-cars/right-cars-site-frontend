import classNames from "classnames";

import { Application } from "@/shared/types/application";

import cls from "./styles.module.scss";

export default function ApplicationItem({ id, name, status }: Application) {
  const statusClass = classNames({
    [cls.approved]: status === "approved",
    [cls.notApproved]: status === "not approved",
    [cls.completeApplication]:
      status !== "approved" && status !== "not approved",
  });

  return (
    <li className={`${cls.wrapp} ${cls.applicationWrapp}`}>
      <p className="titleTiny">{id}</p>
      <p className="titleTiny" style={{ textTransform: "none" }}>
        {name}
      </p>
      <p className={statusClass}>{status}</p>
    </li>
  );
}

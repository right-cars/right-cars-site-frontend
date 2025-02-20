"use client";

import { useState } from "react";

import { TabType } from "@/shared/types/applicationsTab";

import ApplicationItem from "@/views/Account/Finance/ApplicationItem";
import Tabs from "@/views/Account/Finance/Tabs/Tabs";
import NoRequest from "@/views/Account/Finance/NoRequest";

import { tempApplications } from "./tempApplications";

import cls from "./styles.module.scss";

export default function Finance() {
  const [activeTab, setActiveTab] = useState<TabType>("inProgress");

  const renderContent = () => {
    const currentApps = tempApplications[activeTab] || [];

    if (currentApps.length === 0) {
      return <NoRequest />;
    }
    return (
      <ul className={cls.appList}>
        {currentApps.map(({ id, name, status }, index) => (
          <ApplicationItem key={index} name={name} id={id} status={status} />
        ))}
      </ul>
    );
  };

  return (
    <section>
      <h3 className="titleSmall" style={{ marginBottom: 32 }}>
        My finance applications
      </h3>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div style={{ marginTop: 24 }}>{renderContent()}</div>
    </section>
  );
}

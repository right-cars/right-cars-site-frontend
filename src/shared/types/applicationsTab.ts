export type TabType = "inProgress" | "completed";

export type TabsProps = {
  activeTab: TabType;
  setActiveTab: (type: TabType) => void;
};

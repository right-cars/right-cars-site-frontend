import { Application } from "@/shared/types/application";
import { TabType } from "@/shared/types/applicationsTab";

export const tempApplications: Record<TabType, Application[]> = {
  inProgress: [
    {
      id: "#34365762",
      name: "2012 Toyota Land Cruiser Prado 4.0",
      status: "complete application",
    },
    {
      id: "#34365762",
      name: "2007 Nissan Tiida Hatch 1.6 ",
      status: "complete application",
    },
  ],
  completed: [
    {
      id: "#34365762",
      name: "2012 Toyota Land Cruiser Prado 4.0",
      status: "not approved",
    },
    {
      id: "#34365762",
      name: "2007 Nissan Tiida Hatch 1.6 ",
      status: "approved",
    },
  ],
};

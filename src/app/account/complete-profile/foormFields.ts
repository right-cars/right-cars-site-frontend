import { AccountField } from "@/shared/types/account";

export const formFields: Record<string, AccountField[]> = {
  "south African citizen": [
    { id: "firstName", label: "first name" },
    { id: "surname", label: "surname" },
    { id: "idNumber", label: "id number" },
    {
      id: "mobileNumber",
      label: "mobile number",
      phone: true,
    },
  ],
  "Foreigner/ refugee": [
    { id: "firstName", label: "first name" },
    { id: "surname", label: "surname" },
    { id: "passportNumber", label: "passport number" },
    { id: "trafficRegisterNumber", label: "traffic register number" },
    {
      id: "mobileNumber",
      label: "mobile number",
      phone: true,
    },
  ],
  "Asylum Seeker": [
    { id: "firstName", label: "first name" },
    { id: "surname", label: "surname" },
    {
      id: "mobileNumber",
      label: "mobile number",
      phone: true,
    },
    { id: "refugeeDocument", label: "refugee document" },
  ],
};
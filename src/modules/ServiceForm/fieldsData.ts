export const fieldsData = [
  { id: "firstName", label: "first name", type: "input", required: true },
  { id: "surname", label: "surname", type: "input", required: true },
  {
    id: "contactNumber",
    label: "Contact Number",
    type: "input",
    required: true,
    phone:true
  },
  { id: "email", label: "email", type: "input", required: true },
  { id: "vehicleYear", label: "Vehicle Year", type: "input", required: true },
  {
    id: "vehicleRegistrationNumber",
    label: "Vehicle Registration Number",
    type: "input",
      required: true,
        isCarService:true
  },
  { id: "vehicleMake", label: "Vehicle Make", type: "input", required: true },
  {
    id: "currentVehicleKilometers",
    label: "Current Vehicle Kilometers",
    type: "input",
      required: true,
        isCarService:true
  },
  { id: "vehicleModel", label: "Vehicle Model", type: "input", required: true },
  {
    id: "vehicleServiceDueDate",
    label: "vehicle service due date",
    type: "input",
    required: true,
      placeholder: "mm/dd/yyyy",
    isCarService:true
  },
];

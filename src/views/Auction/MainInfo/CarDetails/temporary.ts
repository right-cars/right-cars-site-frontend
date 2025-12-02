interface Detail {
  name: string;
  value: string | number;
  href?: string; 
}

interface TemporarySection {
  title: string;
  details: Detail[];
}

export const temporary:TemporarySection[] = [
  {
    title: "VEHICLE details",
    details: [
      {
        name: "No of Seats",
        value: 5,
      },
      {
        name: "Body Type",
        value: "hatchback",
      },
      {
        name: "Variant",
        value: "Hatch 1.6 Visia+",
      },
      {
        name: "Colour",
        value: "black",
      },
      {
        name: "Stock Number",
        value: "# GP10998",
      },
    ],
  },
  {
    title: "VEHICLE CONDITION",
    details: [
      {
        name: "Vehicle service history",
        value: "Complete, Up To Date ",
      },
      {
        name: "Spare key",
        value: "yes",
      },
      {
        name: "Warranty",
        value: "13.02.2027",
      },
      {
        name: "Roadworthy voucher",
        value: "included",
        href: "/",
      },
      {
        name: "Condition report",
        value: "included",
        href: "/",
      },
    ],
  },
  {
    title: "VEHICLE performance",
    details: [
      {
        name: "Fuel Tank Capacity",
        value: "80 L",
      },
      {
        name: "Cylinder Layout",
        value: "i4",
      },
      {
        name: "Kilowatts",
        value: "130 kW",
      },
      {
        name: "Variant",
        value: "hatchback",
      },
      {
        name: "Gears",
        value: 5,
      },
    ],
  },
  {
    title: "VEHICLE FEATURES",
    details: [
      {
        name: "Car play",
        value: "",
      },
    ],
  },
];

import Image from "next/image";
import Link from "next/link";

// import { temporary } from "./temporary";
import cls from "./styles.module.scss";

//@ts-expect-error
export default function CarDetails({data}) {

  const features = Object.keys(data).filter(key => key.includes("feature")).map(key => ({
    name: key.split("_").join(" "),
    value: data[key]
  }));

  const infoData = [
    {
      title: "VEHICLE details",
      details: [
        {
          name: "No of Seats",
          value: data.number_of_seats,
        },
        {
          name: "Body Type",
          value: data.body_type,
        },
        {
          name: "Variant",
          value: data.variant,
        },
        {
          name: "Colour",
          value: data.colour,
        },
        {
          name: "Stock Number",
          value: data.stock_number,
        },
      ],
    },
    {
      title: "VEHICLE CONDITION",
      details: [
        {
          name: "Vehicle service history",
          value: data.vehicle_service_history,
        },
        {
          name: "Spare key",
          value: data.spare_key ? "yes" : "no",
        },
        {
          name: "Warranty",
          value: data.warranty ? "yes" : "no",
        },
        {
          name: "Roadworthy voucher",
          value: data.roadworthy_voucher ? "included" : "missing",
          href: "/",
        },
        {
          name: "Condition report",
          value: data.condition_report ? "included" : "missing",
          href: "/",
        },
      ],
    },
    {
      title: "VEHICLE performance",
      details: [
        {
          name: "Fuel Tank Capacity",
          value: data.engine_capacity,
        },
        {
          name: "Cylinder Layout",
          value: data.cylinder_layout,
        },
        {
          name: "Kilowatts",
          value: data.kilowatts,
        },
        {
          name: "Variant",
          value: data.variant,
        },
        {
          name: "Gears",
          value: data.gears,
        },
      ],
    },
    {
      title: "VEHICLE FEATURES",
      details: features,
    },
  ];

  return (
    <ul className={cls.detailsContainer}>
      {infoData.map(({ title, details }, index) => (
        <li key={index} className={cls.detailsWrapper}>
          <p className="titleMedium" style={{ marginBottom: 24 }}>{title}</p>
          <ul className={cls.detailsList}>
            {details.map(({ href, name, value }, index) => (
              <li key={index} className={cls.item}>
                <p className={cls.itemName}>{name}</p>
                <div className={cls.valueWrap}>
                  <p className="titleSmall">{value}</p>
                  {href && (
                    <Link href={href}>
                      <Image
                        src="/icons/car-page/link.svg"
                        alt="link icon"
                        width={12}
                        height={12}
                      />
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

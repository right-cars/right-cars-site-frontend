// import Image from "next/image";
// import Link from "next/link";

// import { temporary } from "./temporary";
import cls from "./styles.module.scss";

//@ts-expect-error
export default function CarDetails({ data }) {
  const infoData = [
    {
      title: "VEHICLE details",
      details: [
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
          value: data.stockNumber,
        },
      ],
    },
    {
      title: "VEHICLE CONDITION",
      details: [
        {
          name: "Warranty",
          value: data.warranty ? "yes" : "no",
        },
      ],
    },
    {
      title: "VEHICLE performance",
      details: [
        {
          name: "Fuel Tank Capacity",
          value: data.engineCapacityInCc,
        },
        {
          name: "Variant",
          value: data.variant,
        },
      ],
    },
  ];

  if (data.seats) {
    infoData[0].details.push({
      name: "No of Seats",
      value: data.seats,
    });
  }

  if (data.bodyType) {
    infoData[0].details.push({
      name: "Body Type",
      value: data.bodyType,
    });
  }

  if (data.vehicleServiceHistory) {
    infoData[1].details.push({
      name: "Vehicle service history",
      value: data.vehicleServiceHistory,
    });
  }

  if (data.spareKey) {
    infoData[1].details.push({
      name: "Spare key",
      value: data.spareKey ? "yes" : "no",
    });
  }

  if (data.dekraReport) {
    infoData[1].details.push({
      name: "Dekra Report",
      value: data.dekraReport ? "included" : "missing",
    });
  }

  if (data.conditionReport) {
    infoData[1].details.push({
      name: "Condition report",
      value: data.conditionReport ? "included" : "missing",
    });
  }

  if (data.cylinderLayout) {
    infoData[2].details.push({
      name: "Cylinder Layout",
      value: data.cylinderLayout,
    });
  }

  if (data.kilowatts) {
    infoData[2].details.push({
      name: "Kilowatts",
      value: data.kilowatts,
    });
  }

  if (data.gears) {
    infoData[2].details.push({
      name: "Gears",
      value: data.gears,
    });
  }
  const features = Object.keys(data).filter(key => key.includes("feature"));
  // const features = Object.keys(data)
 if(features.length) {
   infoData.push({
     title: "VEHICLE FEATURES",
     // @ts-expect-error
     details: features.map(key => ({
       name: data[key],
     }))
   });
   // const featuresKeys
 }

  return (
    <ul className={cls.detailsContainer}>
      {infoData.map(({ title, details }, index) => (
        <li key={index} className={cls.detailsWrapper}>
          <p className="titleMedium" style={{ marginBottom: 24 }}>
            {title}
          </p>
          <ul className={cls.detailsList}>
            {details.map(({ name, value }, index) => (
              <li key={index} className={cls.item}>
                <p className={cls.itemName}>{name}</p>
                <div className={cls.valueWrap}>
                  <p className="titleSmall">{value}</p>
                  {/*{href && (*/}
                  {/*  <Link href={href}>*/}
                  {/*    <Image*/}
                  {/*      src="/icons/car-page/link.svg"*/}
                  {/*      alt="link icon"*/}
                  {/*      width={12}*/}
                  {/*      height={12}*/}
                  {/*    />*/}
                  {/*  </Link>*/}
                  {/*)}*/}
                </div>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

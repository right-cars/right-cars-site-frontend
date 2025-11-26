import {getAllCars, getFilters} from "@/api/cars";

import ShowroomView from "@/views/Showroom/ShowroomView";

export const dynamic = 'force-dynamic';

export default async function Showroom() {
  const data = await getAllCars();
  const filters = await getFilters();

  const transformData = data.map(
    ({
         //@ts-expect-error
      _id,
         //@ts-expect-error
      mainImage,
         //@ts-expect-error
      year,
         //@ts-expect-error
      make,
         //@ts-expect-error
      model,
         //@ts-expect-error
      price,
         //@ts-expect-error
      mileageInKm,
         //@ts-expect-error
      transmission,
         //@ts-expect-error
      vehicleCategory,
         //@ts-expect-error
      fuelType,
    }) => ({
      id: _id,
      img: mainImage,
      year: Number(year),
      make,
      model,
      price: price,
      mileage: mileageInKm,
      km: Number(mileageInKm),
      transmission,
      href: `/showroom/${_id}`,
      type: vehicleCategory,
      fuel: fuelType,
    })
  );

  return <ShowroomView data={transformData} filters={filters} />;
}

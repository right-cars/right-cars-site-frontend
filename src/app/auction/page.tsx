import { getAuctions } from "@/api/auctions";

import AuctionView from "@/views/Auction/AuctionView";

export const dynamic = 'force-dynamic';

export default async function Auction() {
  const data = await getAuctions();

//@ts-expect-error
   const transformData = data.map(({auctionId, endDate, endTime, bids, car}) => ({
      id: auctionId,
      img: car.mainImage,
      year: car.year,
      name: `${car.make} ${car.model}`,
      km: Number(car.mileageInKm),
      transmission: car.transmission,
      endDate,
      endTime,
      currentBid: bids[bids.length - 1] || null,
   }));

  return <AuctionView data={transformData} />;
}

import { temporaryData } from "@/modules/CarListWithSlider/temporaryData";
import CarListWithSlider from "@/modules/CarListWithSlider/CarListWithSlider";
import SimpleCardList from "@/modules/SimpleCardList/SimpleCardList";

import MainInfo from "@/views/CarPage/MainInfo/MainInfo";

import { cardListData } from "./cardListData";

export default async function CarPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <>
      <MainInfo pageId={id} />
      <SimpleCardList data={cardListData} title="how it works" minHeight={284}/>
      <CarListWithSlider
        title="you might also like"
        carsData={temporaryData}
      />
    </>
  );
}

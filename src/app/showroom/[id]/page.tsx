// import { temporaryData } from "@/modules/CarListWithSlider/temporaryData";
import CarListWithSlider from "@/modules/CarListWithSlider/CarListWithSlider";
import SimpleCardList from "@/modules/SimpleCardList/SimpleCardList";

import MainInfo from "@/views/CarPage/MainInfo/MainInfo";

import { getCarById } from "@/api/cars";

import { cardListData } from "./cardListData";

import cls from "../../../modules/SimpleCardList/styles.module.scss";


export default async function CarPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const data = await getCarById(id);

  return (
    <>
      {/*  @ts-expect-error*/}
      <MainInfo data={data} pageId={id} />
      <SimpleCardList
        data={cardListData}
        title="how it works"
        minHeight={284}
        titleStyles={cls.titleShowroom}
      />
      <CarListWithSlider
        title="you might also like"
        // carsData={temporaryData}
      />
    </>
  );
}

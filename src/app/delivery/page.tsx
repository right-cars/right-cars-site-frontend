import ServicesPageBanner from "@/modules/ServicesPageBanner/ServicesPageBanner";
import SimpleCardList from "@/modules/SimpleCardList/SimpleCardList";

import DeliveryList from "@/views/DeliveryPage/DeliveryList";

import { cardListData } from "./cardListData";

import cls from "../../modules/SimpleCardList/styles.module.scss";

export default function DeliveryPage() {
  return (
    <>
      <ServicesPageBanner
        delivery
        title="Delivery Across South Africa"
        txt="We know how exciting it is to get your hands on your new car, which is why we make sure the delivery process is as smooth and hassle-free as possible. Whether you're in Cape Town, Johannesburg, Durban, or other major cities, we offer reliable delivery to bring your car  to you"
        img="/images/services-pages/banner4.webp"
      />
      <SimpleCardList
        title="How It Works"
        data={cardListData}
        minHeight={260}
        delivery
        className={cls.deliveryPaddingFix}
      />
      <DeliveryList />
    </>
  );
}

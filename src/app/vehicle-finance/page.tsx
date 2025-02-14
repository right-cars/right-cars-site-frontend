import ServicesPageBanner from "@/modules/ServicesPageBanner/ServicesPageBanner";
import SimpleCardList from "@/modules/SimpleCardList/SimpleCardList";
import Container from "@/shared/layouts/Container/Container";
import { cardListData } from "./cardListData";

export default function VehicleFinancePage() {
  return (
    <Container>
      <ServicesPageBanner
        title="vehicle Finance"
        txt="we understand that buying a car is a significant investment. That's why we offer flexible and affordable vehicle financing options to help you get behind the wheel of a quality used car. Whether it's your first car or you're upgrading to something new, our finance plans are designed to fit your budget and needs"
        btn
        img="/images/services-pages/banner1.webp"
      />
      <SimpleCardList data={cardListData} minHeight={236} />
    </Container>
  );
}

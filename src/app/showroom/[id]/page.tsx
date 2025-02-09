import { temporaryData } from "@/modules/CarListWithSlider/temporaryData";
import CarListWithSlider from "@/modules/CarListWithSlider/CarListWithSlider";
import Container from "@/shared/layouts/Container/Container";
import HowItWorks from "@/app/views/CarPage/HowItWorks/HowItWorks";
import MainInfo from "@/app/views/CarPage/MainInfo/MainInfo";

export default async function Showroom({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <Container>
      <MainInfo pageId={id} />
      <HowItWorks />
      <CarListWithSlider
        title="you might also like"
        carsData={temporaryData}
      />
    </Container>
  );
}

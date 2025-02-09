import Container from "@/shared/layouts/Container/Container";
import HowItWorks from "@/app/views/CarPage/HowItWorks/HowItWorks";
import MainInfo from "@/app/views/CarPage/MainInfo/MainInfo";

export default function Showroom({ params }: { params: { id: string } }) {
  return (
    <Container>
      <MainInfo pageId={params.id} />
      <HowItWorks/>
    </Container>
  );
}

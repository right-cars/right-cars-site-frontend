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
    </Container>
  );
}

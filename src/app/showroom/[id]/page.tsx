import Container from "@/shared/layouts/Container/Container";
import MainInfo from "@/app/views/CarPage/MainInfo/MainInfo";

export default function Showroom({ params }: { params: { id: string } }) {
  return (
    <Container>
      <MainInfo pageId={params.id} />
    </Container>
  );
}

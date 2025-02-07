import Container from "@/shared/layouts/Container/Container";

export default function FinancePage({ params }: { params: { id: string } }) {
  return (
    <Container>
          <h1>finance page { params.id}</h1>
    </Container>
  );
}

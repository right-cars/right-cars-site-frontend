import Container from "@/shared/layouts/Container/Container";

export default function ReservePage({ params }: { params: { id: string } }) {
  return (
    <Container>
          <h1>reserve page { params.id}</h1>
    </Container>
  );
}

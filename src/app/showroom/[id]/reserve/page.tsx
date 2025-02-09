import Container from "@/shared/layouts/Container/Container";

export default async function ReservePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <Container>
      <h1>reserve page {id}</h1>
    </Container>
  );
}

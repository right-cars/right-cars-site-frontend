import Container from "@/shared/layouts/Container/Container";

export default async function FinancePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <Container>
      <h1>Finance page {id}</h1>
    </Container>
  );
}

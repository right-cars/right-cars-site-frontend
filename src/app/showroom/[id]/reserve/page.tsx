import Container from "@/shared/layouts/Container/Container";
import Reserve from "@/app/views/Reserve/Reserve";

export default async function ReservePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <Container>
      <Reserve id={id} />
    </Container>
  );
}

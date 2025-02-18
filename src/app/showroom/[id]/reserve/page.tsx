import Reserve from "@/views/Reserve/Reserve";

export default async function ReservePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <Reserve id={id} />;
}

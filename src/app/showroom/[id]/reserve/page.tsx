import Reserve from "@/views/Reserve/Reserve";

import {getCarById} from "@/api/cars";

export default async function ReservePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await getCarById(id);

  return <Reserve data={data} />;
}

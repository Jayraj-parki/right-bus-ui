import destinations from "@/mocks/data/destinations.json";
export async function GET(_req, { params }) {
  const item = destinations.find((d) => String(d.id) === String(params.id));
  return item ? Response.json(item) : new Response("Not Found", { status: 404 });
}

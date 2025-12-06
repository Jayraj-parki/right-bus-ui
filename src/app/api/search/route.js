import destinations from "@/mocks/data/destinations.json";

export async function GET() { return Response.json({ results: destinations.slice(0, 6) }); }

export async function POST(request) {
  const body = await request.json();
  const results = destinations.filter(
    (d) =>
      (!body.from || d.from.toLowerCase().includes(body.from.toLowerCase())) &&
      (!body.to || d.to.toLowerCase().includes(body.to.toLowerCase()))
  );
  return Response.json({ results });
}

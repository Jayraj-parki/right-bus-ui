import destinations from "@/mocks/data/destinations.json";
export async function GET() { return Response.json({ items: destinations }); }

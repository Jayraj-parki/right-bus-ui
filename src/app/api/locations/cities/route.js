import cities from "@/mocks/data/cities.json";
export async function GET() { return Response.json({ items: cities }); }

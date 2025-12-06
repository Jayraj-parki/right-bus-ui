import faq from "@/mocks/data/faq.json";
export async function GET() { return Response.json({ items: faq }); }

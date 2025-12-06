import testimonials from "@/mocks/data/testimonials.json";
export async function GET() { return Response.json({ items: testimonials }); }

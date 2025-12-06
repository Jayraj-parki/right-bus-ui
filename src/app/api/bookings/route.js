export async function POST(request) {
  const body = await request.json();
  return Response.json({ id: Date.now(), ...body, status: "created" });
}

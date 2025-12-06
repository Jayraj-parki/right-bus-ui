export async function GET(_req, { params }) { return Response.json({ id: params.id, status: "created" }); }

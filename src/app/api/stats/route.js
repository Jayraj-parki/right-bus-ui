import stats from "@/mocks/data/stats.json";
export async function GET() {
  return Response.json(stats);
}

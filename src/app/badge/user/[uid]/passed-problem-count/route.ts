import type { NextRequest } from "next/server";
import fetchUser from "@/utils/user";
import badgeResponse from "@/utils/badge";

export async function GET(
  request: NextRequest,
  { params }: { params: { uid: string } },
) {
  const {
    user: { passedProblemCount },
  } = await fetchUser(parseInt(params.uid, 10));

  return badgeResponse(request.nextUrl.searchParams, {
    label: "通过",
    message: (passedProblemCount ?? "完全隐私保护").toString(),
    ...(passedProblemCount === null ? { color: "red" } : {}),
  });
}

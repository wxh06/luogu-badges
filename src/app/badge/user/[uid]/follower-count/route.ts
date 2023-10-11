import type { NextRequest } from "next/server";
import fetchUser from "@/utils/user";
import badgeResponse from "@/utils/badge";

export async function GET(
  request: NextRequest,
  { params }: { params: { uid: string } },
) {
  const {
    user: { followerCount },
  } = await fetchUser(parseInt(params.uid, 10));

  return badgeResponse(request.nextUrl.searchParams, {
    label: "粉丝",
    message: followerCount.toString(),
  });
}

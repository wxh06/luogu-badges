import type { NextRequest } from "next/server";
import fetchUser from "@/utils/user";
import badgeResponse from "@/utils/badge";

export async function GET(
  request: NextRequest,
  { params }: { params: { uid: string } },
) {
  const {
    user: { ccfLevel },
  } = await fetchUser(parseInt(params.uid, 10));

  let color: string;
  if (ccfLevel >= 8) color = "#ffc116";
  else if (ccfLevel >= 6) color = "#3498db";
  else color = "#52c41a";

  return badgeResponse(request.nextUrl.searchParams, {
    label: "CCF 等级",
    message: ccfLevel.toString(),
    color,
  });
}

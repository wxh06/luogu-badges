import type { NextRequest } from "next/server";
import { makeBadge } from "badge-maker";
import fetchUser from "@/utils/user";

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

  return new Response(
    makeBadge({ label: "CCF 等级", message: ccfLevel.toString(), color }),
    { headers: { "Content-Type": "image/svg+xml" } },
  );
}

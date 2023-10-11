import type { NextRequest } from "next/server";
import type { Format } from "badge-maker";
import type { DataResponse, UserData } from "luogu-api-docs/luogu-api";
import badgeResponse from "@/utils/badge";

export async function fetchUser(uid: number) {
  const response = await fetch(`https://www.luogu.com.cn/user/${uid}`, {
    headers: { "X-Luogu-Type": "content-only" },
    next: { revalidate: 3600 * 12 },
  });
  if (!response.ok) throw Error(response.statusText);
  const data = (await response.json()) as DataResponse<UserData>;
  if (data.code !== 200) throw Error(data.code.toString());
  return data.currentData;
}

const userBadge =
  (handler: (user: UserData["user"]) => Format) =>
  async (request: NextRequest, { params }: { params: { uid: string } }) =>
    badgeResponse(
      request.nextUrl.searchParams,
      handler((await fetchUser(parseInt(params.uid, 10))).user),
    );
export default userBadge;

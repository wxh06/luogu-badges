import type { NextRequest } from "next/server";
import type { Format } from "badge-maker";
import type { UserData } from "luogu-api-docs/luogu-api";
import badgeResponse from "@/utils/badge";
import fetchData from "@/utils/fetch";

const userBadge =
  (handler: (user: UserData["user"]) => Format) =>
  async (request: NextRequest, { params }: { params: { uid: string } }) =>
    badgeResponse(
      request.nextUrl.searchParams,
      handler((await fetchData<UserData>(`/user/${params.uid}`)).user),
    );
export default userBadge;

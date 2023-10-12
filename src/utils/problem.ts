import type { NextRequest } from "next/server";
import type { Format } from "badge-maker";
import type { ProblemData } from "luogu-api-docs/luogu-api";
import badgeResponse from "@/utils/badge";
import fetchData from "@/utils/fetch";

const problemBadge =
  (handler: (problem: ProblemData["problem"]) => Format) =>
  async (request: NextRequest, { params }: { params: { pid: string } }) =>
    badgeResponse(
      request.nextUrl.searchParams,
      handler((await fetchData<ProblemData>(`/problem/${params.pid}`)).problem),
    );
export default problemBadge;

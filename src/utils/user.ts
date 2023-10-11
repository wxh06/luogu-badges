import type { DataResponse, UserData } from "luogu-api-docs/luogu-api";

export default async function fetchUser(uid: number) {
  const response = await fetch(`https://www.luogu.com.cn/user/${uid}`, {
    headers: { "X-Luogu-Type": "content-only" },
    next: { revalidate: 3600 * 12 },
  });
  if (!response.ok) throw Error(response.statusText);
  const data = (await response.json()) as DataResponse<UserData>;
  if (data.code !== 200) throw Error(data.code.toString());
  return data.currentData;
}

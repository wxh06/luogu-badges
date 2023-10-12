import { DataResponse } from "luogu-api-docs/luogu-api";

export default async function fetchData<T>(path: string) {
  const response = await fetch(`https://www.luogu.com.cn${path}`, {
    headers: { "X-Luogu-Type": "content-only" },
    next: { revalidate: 3600 * 12 },
  });
  if (!response.ok) throw Error(response.statusText);
  const data = (await response.json()) as DataResponse<T>;
  if (data.code !== 200) throw Error(data.code.toString());
  return data.currentData;
}

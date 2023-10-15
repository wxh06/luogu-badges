"use client";

interface Params {
  style?: string;
}

const getPathname = (path: string, badge: string, params: Params) =>
  `/badge/${path}/${badge}?${new URLSearchParams(
    params as Record<keyof Params, string>,
  ).toString()}`;

export default function BadgesPreview({
  path,
  badges,
  params,
}: {
  path: string;
  badges: string[];
  params: Params;
}) {
  return (
    <dl className="divide-y divide-gray-100">
      {badges.map((badge) => (
        <div
          className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
          key={badge}
        >
          <dt className="flex items-center justify-center text-sm font-medium leading-6 text-gray-900">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt={badge} src={getPathname(path, badge, params)} />
          </dt>
          <dd className="mt-1 flex items-center justify-center text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            <input
              className="form block w-full max-w-xs sm:max-w-none"
              value={
                typeof window === "object"
                  ? new URL(
                      getPathname(path, badge, params),
                      window.location.href,
                    ).toString()
                  : undefined
              }
              readOnly
              onFocus={(e) => e.target.select()}
            />
          </dd>
        </div>
      ))}
    </dl>
  );
}

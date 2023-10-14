"use client";

import { useState } from "react";

const DEFAULT_UID = process.env.NEXT_PUBLIC_DEFAULT_UID;

export default function Page() {
  const [uid, setUid] = useState(DEFAULT_UID);
  const [style, setStyle] = useState("flat");

  return (
    <>
      <div className="px-4 sm:px-0">
        <h2 className="text-lg font-semibold leading-7 text-gray-900">
          洛谷用户徽章
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
          <label className="block sm:col-span-1">
            <span className="text-sm font-medium leading-6 text-gray-900">
              用户编号
            </span>
            <input
              className="form mt-2 block w-full"
              type="number"
              value={uid}
              onChange={(e) => setUid(e.target.value)}
            />
          </label>
          <label className="block sm:col-span-1">
            <span className="text-sm font-medium leading-6 text-gray-900">
              样式
            </span>
            <select
              className="form mt-2 block w-full"
              value={style}
              onChange={(e) => setStyle(e.target.value)}
            >
              <option>flat</option>
              <option>flat-square</option>
              <option>plastic</option>
              <option>for-the-badge</option>
            </select>
          </label>
        </div>
      </div>
      <dl className="mt-10 divide-y divide-gray-100 border-t border-gray-100">
        {["ccf-level", "follower-count", "passed-problem-count"].map(
          (badge) => (
            <div
              className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
              key={badge}
            >
              <dt className="flex items-center justify-center text-sm font-medium leading-6 text-gray-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={badge}
                  src={`/badge/user/${uid}/${badge}?style=${style}`}
                />
              </dt>
              <dd className="mt-1 flex items-center justify-center text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <input
                  className="form block w-full max-w-xs sm:max-w-none"
                  readOnly
                  defaultValue={
                    typeof window === "object"
                      ? new URL(
                          `/badge/user/${uid}/${badge}?style=${style}`,
                          window.location.href,
                        ).toString()
                      : undefined
                  }
                  onFocus={(e) => e.target.select()}
                />
              </dd>
            </div>
          ),
        )}
      </dl>
    </>
  );
}

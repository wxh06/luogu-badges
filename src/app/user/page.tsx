"use client";

import { useState } from "react";

const DEFAULT_UID = process.env.NEXT_PUBLIC_DEFAULT_UID;

export default function Page() {
  const [uid, setUid] = useState(DEFAULT_UID);
  const [style, setStyle] = useState("flat");

  return (
    <>
      <div className="grid max-w-xs grid-cols-1 gap-6">
        <label className="block">
          <span className="text-gray-700">用户编号</span>
          <input
            className="simple mt-1 block w-full"
            type="number"
            value={uid}
            onChange={(e) => setUid(e.target.value)}
          />
        </label>
        <label className="block">
          <span className="text-gray-700">样式</span>
          <select
            className="simple mt-1 block w-full"
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
      <div className="mt-8 flex gap-2">
        {["ccf-level", "follower-count", "passed-problem-count"].map(
          (badge) => (
            <img
              alt={badge}
              src={`/badge/user/${uid}/${badge}?style=${style}`}
              key={badge}
            />
          ),
        )}
      </div>
    </>
  );
}

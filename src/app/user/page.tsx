"use client";

import { useState } from "react";

export default function Page() {
  const [uid, setUid] = useState("108135");
  const [style, setStyle] = useState("");

  return (
    <>
      <div className="m-1">
        <label>
          用户编号{" "}
          <input
            type="number"
            value={uid}
            onChange={(e) => setUid(e.target.value)}
          />
        </label>
      </div>
      <div className="m-1">
        <label>
          样式{" "}
          <select value={style} onChange={(e) => setStyle(e.target.value)}>
            <option value="">请选择</option>
            <option>flat</option>
            <option>flat-square</option>
            <option>plastic</option>
            <option>for-the-badge</option>
          </select>
        </label>
      </div>
      {["ccf-level", "follower-count", "passed-problem-count"].map((badge) => (
        <img
          className="m-1"
          alt={badge}
          src={`/badge/user/${uid}/${badge}?style=${style}`}
          key={badge}
        />
      ))}
    </>
  );
}

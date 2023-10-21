import type { Metadata } from "next";
import UserBadges from "./user-badges";

const { DEFAULT_USER } = process.env;

export const metadata: Metadata = { title: "用户徽章 - 洛谷徽章" };

export default function Page() {
  return <UserBadges defaultUser={DEFAULT_USER!} />;
}

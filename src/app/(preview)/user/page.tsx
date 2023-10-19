import type { Metadata } from "next";
import UserBadges from "./user-badges";

const { DEFAULT_USER } = process.env;

export const metadata: Metadata = { title: "洛谷用户徽章" };

export default function Page() {
  return <UserBadges defaultUser={DEFAULT_USER!} />;
}

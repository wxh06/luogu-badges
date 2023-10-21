import type { Metadata } from "next";
import ProblemBadges from "./problem-badges";

const { DEFAULT_PROBLEM } = process.env;

export const metadata: Metadata = { title: "题目徽章 - 洛谷徽章" };

export default function Page() {
  return <ProblemBadges defaultProblem={DEFAULT_PROBLEM!} />;
}

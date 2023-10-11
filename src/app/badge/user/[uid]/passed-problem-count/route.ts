import userBadge from "@/utils/user";

export const GET = userBadge(({ passedProblemCount }) => ({
  label: "通过",
  message: (passedProblemCount ?? "完全隐私保护").toString(),
  ...(passedProblemCount === null ? { color: "red" } : {}),
}));

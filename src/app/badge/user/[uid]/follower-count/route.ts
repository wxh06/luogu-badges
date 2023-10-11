import userBadge from "@/utils/user";

export const GET = userBadge(({ followerCount }) => ({
  label: "粉丝",
  message: followerCount.toString(),
}));

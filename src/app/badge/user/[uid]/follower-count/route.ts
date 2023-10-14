import userBadge from "@/utils/user";

export const GET = userBadge(({ followerCount }) => {
  let color: string;
  if (followerCount >= 1000) color = "yellow";
  else if (followerCount >= 100) color = "yellowgreen";
  else if (followerCount >= 10) color = "green";
  else if (followerCount) color = "brightgreen";
  else color = "inactive";

  return { label: "粉丝", message: followerCount.toString(), color };
});

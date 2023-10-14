import userBadge from "@/utils/user";

export const GET = userBadge(({ ranking }) => {
  let color: string;
  if (ranking === null) color = "inactive";
  else if (ranking <= 500) color = "yellow";
  else if (ranking <= 5000) color = "yellowgreen";
  else if (ranking <= 50000) color = "green";
  else color = "brightgreen";

  return { label: "排名", message: (ranking ?? "未知").toString(), color };
});

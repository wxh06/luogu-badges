import userBadge from "@/utils/user";

export const GET = userBadge(({ ccfLevel }) => {
  let color: string;
  if (ccfLevel >= 8) color = "#ffc116";
  else if (ccfLevel >= 6) color = "#3498db";
  else if (ccfLevel) color = "#52c41a";
  else color = "inactive";

  return { label: "CCF 等级", message: (ccfLevel || "未知").toString(), color };
});

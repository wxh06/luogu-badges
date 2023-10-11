import userBadge from "@/utils/user";

export const GET = userBadge(({ ccfLevel }) => {
  let color: string;
  if (ccfLevel >= 8) color = "#ffc116";
  else if (ccfLevel >= 6) color = "#3498db";
  else color = "#52c41a";

  return { label: "CCF 等级", message: ccfLevel.toString(), color };
});

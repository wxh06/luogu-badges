import userBadge from "@/utils/user";

export const GET = userBadge(({ passedProblemCount }) => {
  let color: string;
  if (passedProblemCount === null) color = "red";
  else if (passedProblemCount >= 1000) color = "yellow";
  else if (passedProblemCount >= 100) color = "yellowgreen";
  else if (passedProblemCount >= 10) color = "green";
  else if (passedProblemCount) color = "brightgreen";
  else color = "inactive";

  return {
    label: "通过",
    message: (passedProblemCount ?? "完全隐私保护").toString(),
    color,
  };
});

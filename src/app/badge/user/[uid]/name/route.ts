import userBadge from "@/utils/user";

const colors: Record<string, string> = {
  Cheater: "#960",
  Gray: "#bbb",
  Blue: "#0e90d2",
  Green: "#5eb95e",
  Orange: "#e67e22",
  Red: "#e74c3c",
  Purple: "#8e44ad",
};

export const GET = userBadge(({ name, color }) => ({
  label: "用户名",
  message: name,
  color: colors[color],
}));

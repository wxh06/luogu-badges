import type { Format } from "badge-maker";
import problemBadge from "@/utils/problem";

const difficulties: Format[] = [
  { message: "暂无评定", color: "rgb(191, 191, 191)" },
  { message: "入门", color: "rgb(254, 76, 97)" },
  { message: "普及-", color: "rgb(243, 156, 17)" },
  { message: "普及/提高−", color: "rgb(255, 193, 22)" },
  { message: "普及+/提高", color: "rgb(82, 196, 26)" },
  { message: "提高+/省选−", color: "rgb(52, 152, 219)" },
  { message: "省选/NOI−", color: "rgb(157, 61, 207)" },
  { message: "NOI/NOI+/CTSC", color: "rgb(14, 29, 105)" },
];

export const GET = problemBadge(({ difficulty }) => ({
  label: "难度",
  ...difficulties[difficulty],
}));

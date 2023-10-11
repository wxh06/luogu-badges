import type { NextRequest } from "next/server";
import type { Format } from "badge-maker";

export default function getStyle(request: NextRequest) {
  const style = request.nextUrl.searchParams.get("style") as
    | Format["style"]
    | null;
  return style ? { style } : {};
}

export const validateStyle = (style: string | null) =>
  Boolean(
    style &&
      !["plastic", "flat", "flat-square", "for-the-badge", "social"].includes(
        style,
      ),
  );

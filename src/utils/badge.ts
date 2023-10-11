import { type Format, makeBadge, ValidationError } from "badge-maker";

function getStyle(searchParams: URLSearchParams) {
  const style = searchParams.get("style") as Format["style"] | null;
  return style ? { style } : {};
}

export default function badgeResponse(
  searchParams: URLSearchParams,
  format: Format,
) {
  try {
    return new Response(makeBadge({ ...format, ...getStyle(searchParams) }), {
      headers: { "Content-Type": "image/svg+xml" },
    });
  } catch (e) {
    if (e instanceof ValidationError)
      return new Response(null, { status: 400 });
    throw e;
  }
}

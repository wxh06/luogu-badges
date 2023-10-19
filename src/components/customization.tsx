import type { BadgeFormat } from "@/components/badges-preview";

export default function Customization({
  badgeFormat,
  setBadgeFormat,
}: {
  badgeFormat: BadgeFormat;
  setBadgeFormat: React.Dispatch<React.SetStateAction<BadgeFormat>>;
}) {
  return (
    <div className="border-b border-gray-900/10 pb-10">
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        自定义
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
        <label className="block sm:col-span-1">
          <span className="text-sm font-medium leading-6 text-gray-900">
            样式
          </span>
          <select
            className="form mt-2 block w-full"
            value={badgeFormat.style}
            onChange={(e) =>
              setBadgeFormat({ ...badgeFormat, style: e.target.value })
            }
          >
            <option>flat</option>
            <option>flat-square</option>
            <option>plastic</option>
            <option>for-the-badge</option>
          </select>
        </label>
      </div>
    </div>
  );
}

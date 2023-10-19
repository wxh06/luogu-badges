import { useState } from "react";
import Customization from "./customization";
import BadgesPreview, { type BadgeFormat } from "./badges-preview";

export default function PreviewPage({
  header,
  id,
  label,
  input,
  onSubmit,
  badges,
  path,
}: {
  header: string;
  id: string;
  label: string;
  input: React.ReactElement<HTMLInputElement>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  badges: string[];
  path: string;
}) {
  const [badgeFormat, setBadgeFormat] = useState<BadgeFormat>({});

  return (
    <>
      <div className="space-y-10 px-4 sm:px-0">
        <h1 className="text-lg font-semibold leading-7 text-gray-900">
          {header}
        </h1>
        <form className="border-b border-gray-900/10 pb-10" onSubmit={onSubmit}>
          <label
            htmlFor={id}
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            {label}
          </label>
          <div className="mt-2 flex gap-x-4">
            {input}
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              生成
            </button>
          </div>
        </form>
        <Customization
          badgeFormat={badgeFormat}
          setBadgeFormat={setBadgeFormat}
        />
      </div>
      <BadgesPreview path={path} badges={badges} format={badgeFormat} />
    </>
  );
}

"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import BadgesPreview, { type BadgeFormat } from "@/components/badges-preview";
import Customization from "@/components/customization";

const DEFAULT_UID = process.env.NEXT_PUBLIC_DEFAULT_UID;

const badges = [
  "name",
  "ranking",
  "ccf-level",
  "follower-count",
  "passed-problem-count",
];

interface IFormInput {
  uid: string;
}

export default function Page() {
  const [uid, setUid] = useState(DEFAULT_UID);
  const [badgeFormat, setBadgeFormat] = useState<BadgeFormat>({});
  const { register, handleSubmit } = useForm<IFormInput>({
    defaultValues: { uid },
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => setUid(data.uid);

  return (
    <>
      <div className="space-y-10 px-4 sm:px-0">
        <h1 className="text-lg font-semibold leading-7 text-gray-900">
          洛谷用户徽章
        </h1>
        <form
          className="border-b border-gray-900/10 pb-10"
          onSubmit={handleSubmit(onSubmit)} // eslint-disable-line @typescript-eslint/no-misused-promises
        >
          <label
            htmlFor="uid"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            用户编号
          </label>
          <div className="mt-2 flex gap-x-4">
            <input
              id="uid"
              type="number"
              min={1}
              className="form block grow basis-1/3 sm:grow-0"
              {...register("uid", { min: 1 })} // eslint-disable-line react/jsx-props-no-spreading
            />
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
      <BadgesPreview
        path={`user/${uid}`}
        badges={badges}
        format={badgeFormat}
      />
    </>
  );
}

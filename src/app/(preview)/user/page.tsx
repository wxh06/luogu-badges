"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const DEFAULT_UID = process.env.NEXT_PUBLIC_DEFAULT_UID;

interface IFormInput {
  uid: string;
}

export default function Page() {
  const [uid, setUid] = useState(DEFAULT_UID);
  const [style, setStyle] = useState("flat");
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
                value={style}
                onChange={(e) => setStyle(e.target.value)}
              >
                <option>flat</option>
                <option>flat-square</option>
                <option>plastic</option>
                <option>for-the-badge</option>
              </select>
            </label>
          </div>
        </div>
      </div>
      <dl className="divide-y divide-gray-100">
        {["name", "ccf-level", "follower-count", "passed-problem-count"].map(
          (badge) => (
            <div
              className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
              key={badge}
            >
              <dt className="flex items-center justify-center text-sm font-medium leading-6 text-gray-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={badge}
                  src={`/badge/user/${uid}/${badge}?style=${style}`}
                />
              </dt>
              <dd className="mt-1 flex items-center justify-center text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <input
                  className="form block w-full max-w-xs sm:max-w-none"
                  readOnly
                  defaultValue={
                    typeof window === "object"
                      ? new URL(
                          `/badge/user/${uid}/${badge}?style=${style}`,
                          window.location.href,
                        ).toString()
                      : undefined
                  }
                  onFocus={(e) => e.target.select()}
                />
              </dd>
            </div>
          ),
        )}
      </dl>
    </>
  );
}

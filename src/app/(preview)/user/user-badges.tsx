"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import PreviewPage from "@/components/preview-page";

interface IFormInput {
  uid: string;
}

const badges = [
  "name",
  "ranking",
  "ccf-level",
  "follower-count",
  "passed-problem-count",
];

export default function UserBadges({ defaultUser }: { defaultUser: string }) {
  const [uid, setUid] = useState(defaultUser);
  const { register, handleSubmit } = useForm<IFormInput>({
    defaultValues: { uid },
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => setUid(data.uid);

  return (
    <PreviewPage
      header="洛谷用户徽章"
      id="uid"
      label="用户编号"
      input={
        <input
          id="uid"
          type="number"
          min={1}
          className="form block grow basis-1/3 sm:grow-0"
          {...register("uid", { min: 1 })} // eslint-disable-line react/jsx-props-no-spreading
        />
      }
      onSubmit={handleSubmit(onSubmit)} // eslint-disable-line @typescript-eslint/no-misused-promises
      badges={badges}
      path={`user/${uid}`}
    />
  );
}

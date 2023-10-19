"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import PreviewPage from "@/components/preview-page";

interface IFormInput {
  pid: string;
}

const badges = ["difficulty"];

export default function ProblemBadges({
  defaultProblem,
}: {
  defaultProblem: string;
}) {
  const [problemId, setProblemId] = useState(defaultProblem);
  const { register, handleSubmit } = useForm<IFormInput>({
    defaultValues: { pid: problemId },
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => setProblemId(data.pid);

  return (
    <PreviewPage
      header="洛谷题目徽章"
      id="pid"
      label="题目编号"
      input={
        <input
          id="pid"
          className="form block grow basis-1/3 sm:grow-0"
          {...register("pid")} // eslint-disable-line react/jsx-props-no-spreading
        />
      }
      onSubmit={handleSubmit(onSubmit)} // eslint-disable-line @typescript-eslint/no-misused-promises
      badges={badges}
      path={`problem/${problemId}`}
    />
  );
}

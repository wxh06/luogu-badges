import ProblemBadges from "./problem-badges";

const { DEFAULT_PROBLEM } = process.env;

export default function Page() {
  return <ProblemBadges defaultProblem={DEFAULT_PROBLEM!} />;
}

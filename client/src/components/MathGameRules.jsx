const MathGameRules = () => {
  return (
    <ul className="list-disc space-y-2 pl-6">
      <li>
        If you provide the correct answer in under 4 seconds, you&apos;ll earn
        <strong className="text-secondary"> 100</strong> points.
      </li>
      <li>
        Answering within 4 - 6 seconds will earn you
        <strong className="text-secondary"> 80</strong> points.
      </li>
      <li>
        Responding within 6 - 8 seconds will grant you
        <strong className="text-secondary"> 60</strong> points.
      </li>
      <li>
        A correct answer in 8 - 10 seconds will get you
        <strong className="text-secondary"> 40</strong> points.
      </li>
      <li>
        If it takes you over 10 seconds to answer, you&apos;ll still receive{" "}
        <strong className="text-secondary">20</strong> points.
      </li>
      <li>
        Your score and the time it took you to answer will be displayed on a
        leaderboard, showcasing the top 10 scores among all users.
      </li>
    </ul>
  );
};

export default MathGameRules;

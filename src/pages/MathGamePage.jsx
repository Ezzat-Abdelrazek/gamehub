import { useState } from "react";
import MathGameRules from "../components/MathGameRules";
import MathPageHero from "../components/MathPageHero";
import RulesHover from "../components/RulesHover";
import Timer from "../components/Timer";
import CreateUser from "../components/CreateUser";
import { useAuth } from "../hooks/useAuth";
import MathGame from "../components/MathGame";

const MathGamePage = () => {
  const [start, setStart] = useState(false);
  const [time, setTime] = useState(0);
  const auth = useAuth();

  return (
    <div className="relative flex flex-grow flex-col items-center gap-4 text-center">
      <MathPageHero />
      {!start && (
        <button
          onClick={() => setStart(true)}
          className="rounded-md bg-secondary px-4 py-2 font-pixel text-3xl font-light uppercase tracking-widest transition-all duration-300 hover:-translate-y-1 active:translate-y-1"
        >
          Start
        </button>
      )}
      {start && !auth.user?.username && <CreateUser />}
      {auth.user?.username && <MathGame setTime={setTime} />}
      <div className="absolute bottom-0 right-0 flex gap-4  uppercase tracking-widest">
        <RulesHover>
          <MathGameRules />
        </RulesHover>
        <Timer time={time} />
      </div>
    </div>
  );
};

export default MathGamePage;

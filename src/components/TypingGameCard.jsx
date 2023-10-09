import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const TypingGameCard = () => {
  const [expanded, setExpanded] = useState(false);

  const navigate = useNavigate();

  return (
    <motion.article
      layout
      transition={{ type: "spring", damping: 16 }}
      className="max-w-[400px] space-y-4 overflow-hidden rounded-lg border-l border-t bg-white/25 p-4 shadow-lg backdrop-blur-lg"
    >
      <motion.h3 layout="position" className="text-2xl font-bold text-gray-200">
        Speed Typer
      </motion.h3>
      <motion.h4
        layout="position"
        className="border-b-secondary inline-block border-b text-xl uppercase tracking-widest"
      >
        Rules
      </motion.h4>
      <section className="space-y-2">
        <motion.h5
          layout="position"
          className="text-lg font-bold text-slate-200"
        >
          Description
        </motion.h5>
        <motion.p layout="position" className="text-sm leading-6 ">
          Speed Typer is a typing test game that measures your typing speed and
          accuracy. The game displays a random passage of text and times how
          quickly and accurately you can retype the exact same text. The faster
          you can recreate the text with no mistakes, the higher your score!
        </motion.p>
      </section>
      <section className="space-y-2">
        <motion.div layout="position" className="text-sm leading-6">
          {expanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.25 }}
            >
              <h5 className="text-lg font-bold text-slate-200">
                Score Calculation
              </h5>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  The base score is calculated from the player&apos;s words per
                  minute (WPM) typing speed:
                </li>
                <ul>
                  <li>
                    130+ WPM ={" "}
                    <strong className="text-secondary">100 base score</strong>
                  </li>
                  <li>
                    120-129 WPM ={" "}
                    <strong className="text-secondary">90 base score</strong>
                  </li>
                  <li>
                    110-119 WPM ={" "}
                    <strong className="text-secondary">80 base score</strong>
                  </li>
                  <li>
                    100-109 WPM ={" "}
                    <strong className="text-secondary">70 base score</strong>
                  </li>
                  <li>
                    90-99 WPM ={" "}
                    <strong className="text-secondary">60 base score</strong>
                  </li>
                  <li>
                    80-89 WPM ={" "}
                    <strong className="text-secondary">50 base score</strong>
                  </li>
                  <li>
                    70-79 WPM ={" "}
                    <strong className="text-secondary">40 base score</strong>
                  </li>
                  <li>
                    60-69 WPM ={" "}
                    <strong className="text-secondary">30 base score</strong>
                  </li>
                  <li>
                    {"<"} 60 WPM ={" "}
                    <strong className="text-secondary">20 base score</strong>
                  </li>
                </ul>
                <li>
                  Mistake penalty:
                  <ul>
                    <li>
                      For every mistake (misspelled or missing word), deduct{" "}
                      <strong className="text-secondary">10 points</strong> from
                      the base score.
                    </li>
                  </ul>
                </li>
                <li>
                  Time bonus:
                  <ul>
                    <li>
                      If completed in under 60 seconds, add{" "}
                      <strong className="text-secondary">
                        10 bonus points
                      </strong>
                      .
                    </li>
                    <li>
                      If completed in under 50 seconds, add{" "}
                      <strong className="text-secondary">
                        20 bonus points
                      </strong>
                      .
                    </li>
                    <li>
                      If completed in under 40 seconds, add{" "}
                      <strong className="text-secondary">
                        30 bonus points
                      </strong>
                      .
                    </li>
                    <li>
                      If completed in under 30 seconds, add{" "}
                      <strong className="text-secondary">
                        50 bonus points
                      </strong>
                      .
                    </li>
                  </ul>
                </li>
                <li>
                  Final score is calculated as:
                  <ul>
                    <li>Base score</li>
                    <li>Plus time bonus (if earned)</li>
                    <li>Minus mistake penalty</li>
                  </ul>
                </li>
                <li>High score/leaderboard is based on the final score.</li>
              </ul>
            </motion.div>
          )}
        </motion.div>
      </section>
      <motion.div layout="position" className="flex justify-end">
        <button
          onClick={() => setExpanded((expanded) => !expanded)}
          className="bg-secondary hover:bg-primary cursor-pointer rounded-md p-2 text-sm font-light uppercase tracking-widest transition-all duration-300"
        >
          {expanded ? "Collapse" : "Expand"}
        </button>
      </motion.div>
      <motion.button
        layout="position"
        className="hover:text-primary font-pixel bg-primary w-full rounded-lg px-2 py-4 text-center text-3xl transition-all duration-500 hover:bg-white"
        role="link"
        onClick={() => navigate("/games/speed-typer")}
      >
        Play
      </motion.button>
    </motion.article>
  );
};

export default TypingGameCard;

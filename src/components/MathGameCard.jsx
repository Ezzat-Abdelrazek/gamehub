import { useState } from "react";
import { motion } from "framer-motion";
import { FaDivide, FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import MathGameRules from "./MathGameRules";

const MathGameCard = () => {
  const [expanded, setExpanded] = useState(false);

  const navigate = useNavigate();

  return (
    <motion.article
      layout
      transition={{ type: "spring", damping: 16 }}
      className="max-w-[400px] space-y-4 overflow-hidden rounded-lg border-l border-t bg-white/25 p-4 shadow-lg backdrop-blur-lg"
    >
      <motion.h3 layout="position" className="text-2xl font-bold text-gray-200">
        Quick Math Challenge
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
          You&apos;ll be presented with a random math equation involving two
          numbers and one of the four basic operation{" "}
          <span className="inline-flex gap-2 rounded-sm bg-gray-900 px-3 py-1 text-base font-bold tracking-wide text-red-500">
            <FaPlus />
            <FaMinus />
            <FaTimes />
            <FaDivide />
          </span>{" "}
          for example,{" "}
          <span className="whitespace-nowrap rounded-sm bg-gray-900 px-3 py-1 text-base font-bold tracking-wide text-red-500">
            3 + 5 = ?
          </span>{" "}
          Your task is to calculate the correct answer and type it into a text
          box, then hit the{" "}
          <span className="text-secondary font-bold">Submit</span> button.
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
              <MathGameRules />
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
        onClick={() => navigate("/games/quick-math")}
      >
        Play
      </motion.button>
    </motion.article>
  );
};

export default MathGameCard;

import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const RulesHover = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="relative " onMouseEnter={() => setIsOpen(true)}>
      <button
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className="cursor-pointer uppercase tracking-widest"
      >
        Rules
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0, transition: { type: "tween" } }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.25 }}
            className="absolute -right-24 bottom-8 w-80 max-w-lg origin-bottom-right rounded-lg bg-gray-800  px-3  py-6 text-left text-sm normal-case sm:right-0 sm:w-96 sm:px-6 sm:text-base"
          >
            <button
              aria-label="Close Rules Model Window"
              className="absolute right-4 top-4 cursor-pointer text-xl sm:text-2xl"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes />
            </button>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};

export default RulesHover;

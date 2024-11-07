"use client";

import { cn } from "../lib/utils1";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
import GraphemeSplitter from "grapheme-splitter"; // Import the splitter

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const splitter = new GraphemeSplitter(); // Initialize the splitter

  // Split text into grapheme clusters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: splitter.splitGraphemes(word.text), // Correctly split into emojis and characters
    };
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => (
          <div key={`word-${idx}`} className="inline-block">
            {word.text.map((char: string, index: number) => {
  if (char === "\n") {
    return <br key={`char-${index}`} />;
  }
  return (
    <motion.span
      key={`char-${index}`}
      initial={{}}
      className={cn(
        `dark:text-white text-black opacity-0 hidden`,
        word.className
      )}
    >
      {char}
    </motion.span>
  );
})}
            &nbsp;
          </div>
        ))}
      </motion.div>
    );
  };

  return (
    <div
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
        className
      )}
    >
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};

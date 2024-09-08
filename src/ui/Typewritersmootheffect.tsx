"use client";
import { TypewriterEffectSmooth } from "./Typewritereffect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Hey 👋",
    },
    {
      text: "I'm",
    },
    {
      text: "Avantika",
    },
    {
      text: "Sharma a",
    },
    {
      text: "Full Stack Developer 💻",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        Crafting Tech with hearts ❤️
      </p>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}

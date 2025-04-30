import React, { useEffect, useRef } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { motion, useAnimation, useInView } from "framer-motion";

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    role: "Open Source Contributor",
    company: "Hacktoberfest",
    duration: "Oct 2023 - Nov 2023",
    description:
      "Contributed to open-source repositories, fixed bugs, and implemented new features. Improved code readability and documentation in multiple projects.",
  },
  {
    role: "Open Source Contributor [React and TypeScript Developer]",
    company: "CNCG Delhi Community",
    duration: "June 2024 - Aug 2024",
    description:
      "Developed reusable React components and improved UI responsiveness using Tailwind CSS. Collaborated closely with the backend team to integrate RESTful APIs.",
  },
  {
    role: "Full Stack Intern",
    company: "ConversAilabs",
    duration: "Jan 2025 - April 2025",
    description:
      "Developed full-stack solutions and intelligent voice agents to automate business processes, handling both frontend interfaces and backend systems; contributed to building conversational AI tools that enhance user interaction and operational efficiency.",
  },
];

const Experience: React.FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  return (
    <>
      <section
        id="experience"
        className="bg-black text-white py-12 px-6"
        ref={containerRef}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.2,
                    },
                  },
                }}
                className="border-l-4 border-white pl-6 relative"
              >
                <div className="absolute -left-3 top-1.5 bg-white rounded-full w-3 h-3"></div>
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-gray-400">{exp.company}</p>
                <div className="flex items-center text-gray-500 text-sm mt-1 mb-2">
                  <AiOutlineCalendar className="mr-1" />
                  {exp.duration}
                </div>
                <p className="text-gray-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Footer */}
      <p className="text-center text-white fixed bottom-0 left-0 w-full py-3 bg-black z-50">
        Made with ❤️ by Avantika Sharma
      </p>
    </>
  );
};

export default Experience;

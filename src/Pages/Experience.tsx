import { useEffect, useRef, useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaBriefcase, FaCode, FaUsers, FaLaptopCode } from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
  icon: React.ReactNode;
  color: string;
  gradient: string;
}

const experiences: ExperienceItem[] = [
  {
    role: "Full Stack Intern",
company: "EvolveonAI",
duration: "Aug 2025 – Dec 2025",
description:
  "Developed a Vendor Portal to manage vendor onboarding and workflows, and contributed to DocSense, a document intelligence system for automated document processing. Worked across frontend and backend to build scalable, user-focused features.",
technologies: ["React", "Node.js", "Tailwind CSS", "MongoDB"],
icon: <FaBriefcase size={24} />,
color: "emerald",
gradient: "from-emerald-500 to-teal-500"

  },
  {
    role: "Full Stack Intern",
    company: "ConversAilabs",
    duration: "Jan 2025 - April 2025",
    description:
      "Developed full-stack solutions and intelligent voice agents to automate business processes, handling both frontend interfaces and backend systems; contributed to building conversational AI tools that enhance user interaction and operational efficiency.",
    technologies: ["React", "Node.js", "AI/ML", "Voice APIs"],
    icon: <FaLaptopCode size={24} />,
    color: "cyan",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    role: "Open Source Contributor",
    company: "CNCG Delhi Community",
    duration: "June 2024 - Aug 2024",
    description:
      "Developed reusable React components and improved UI responsiveness using Tailwind CSS. Collaborated closely with the backend team to integrate RESTful APIs.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
    icon: <FaCode size={24} />,
    color: "purple",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    role: "Open Source Contributor",
    company: "Hacktoberfest",
    duration: "Oct 2023 - Nov 2023",
    description:
      "Contributed to open-source repositories, fixed bugs, and implemented new features. Improved code readability and documentation in multiple projects.",
    technologies: ["Git", "GitHub", "Open Source", "Documentation"],
    icon: <FaUsers size={24} />,
    color: "emerald",
    gradient: "from-emerald-500 to-teal-500"
  }
];

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section
      id="experience"
      className="min-h-screen bg-black text-white py-20 px-4 relative overflow-hidden"
      ref={containerRef}
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: -30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
        }}
        className="max-w-4xl mx-auto text-center mb-16"
      >


        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Experience
        </h2>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          A timeline of my professional growth, contributions, and learning experiences
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-emerald-500 hidden md:block" />

        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { opacity: 0, x: isEven ? -50 : 50 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.6,
                      delay: index * 0.2,
                    },
                  },
                }}
                className={`relative flex items-center ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.5 : 1,
                      rotate: hoveredIndex === index ? 360 : 0
                    }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${exp.gradient} flex items-center justify-center text-white shadow-lg`}
                  >
                    {exp.icon}
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[calc(50%-4rem)] ml-24 md:ml-0 ${
                  isEven ? 'md:pr-16' : 'md:pl-16'
                }`}>
                  <div className="group relative">
                    {/* Glowing Border Effect */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${exp.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500`} />
                    
                    {/* Card */}
                    <div className="relative bg-black border border-cyan-500/20 rounded-2xl p-6 group-hover:border-transparent transition-all duration-500">
                      {/* Duration Badge */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className={`px-3 py-1 bg-gradient-to-r ${exp.gradient} rounded-full text-white text-xs font-medium flex items-center gap-1.5`}>
                          <AiOutlineCalendar />
                          {exp.duration}
                        </span>
                        {/* {index === 0 && (
                          <span className="px-3 py-1 bg-green-500/20 border border-green-500/50 rounded-full text-green-400 text-xs font-medium flex items-center gap-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            Current
                          </span>
                        )} */}
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-2xl font-bold mb-2 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {exp.role}
                      </h3>
                      <p className={`text-lg text-${exp.color}-400 mb-4 font-semibold`}>
                        {exp.company}
                      </p>

                      {/* Description */}
                      <p className="text-gray-400 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={controls}
                            variants={{
                              hidden: { opacity: 0, scale: 0.8 },
                              visible: {
                                opacity: 1,
                                scale: 1,
                                transition: {
                                  delay: index * 0.2 + idx * 0.1
                                }
                              }
                            }}
                            className={`px-3 py-1 text-xs bg-${exp.color}-500/10 text-${exp.color}-400 border border-${exp.color}-500/30 rounded-full`}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      {/* Hover Indicator */}
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: hoveredIndex === index ? '100%' : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${exp.gradient} rounded-b-2xl`}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center py-8 mt-16 text-gray-400"
      >
        <p>Made with <span className="text-red-500">❤️</span> by Avantika Sharma</p>
      </motion.div>
    </section>
  );
}
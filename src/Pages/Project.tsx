import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye } from "react-icons/fa";

interface Project {
  name: string;
  image: string;
  description: string;
  techStack: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  stars?: string;
  status?: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

// Enhanced Project Card Component
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      variants={cardVariants}
      className="relative group w-full max-w-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Container */}
      <div className="relative bg-black border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-500 transition-all duration-500 h-[480px] flex flex-col">
        
        {/* Gradient Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          {/* Project Image */}
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Overlay on Hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-center gap-4"
          >
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ delay: 0.1 }}
              className="p-4 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500 rounded-xl hover:bg-cyan-500/30 transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub size={24} className="text-white" />
            </motion.a>
            
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ delay: 0.2 }}
              className="p-4 bg-purple-500/20 backdrop-blur-sm border border-purple-500 rounded-xl hover:bg-purple-500/30 transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <FaExternalLinkAlt size={24} className="text-white" />
            </motion.a>
          </motion.div>

          {/* Tech Stack Badge */}
          <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-cyan-500/30">
            <div className="flex items-center gap-1.5">
              <FaCode className="text-cyan-400 text-xs" />
              <span className="text-xs text-gray-300 font-medium">{project.techStack}</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative z-10 p-6 flex-1 flex flex-col">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
              {project.name}
            </h3>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-800">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              {project.stars && (
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">★</span>
                  <span>{project.stars}</span>
                </div>
              )}
              {project.status && (
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400">{project.status}</span>
                </div>
              )}
            </div>
            <FaEye className="text-gray-600 group-hover:text-cyan-400 transition-colors" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Project() {
  const projects = [
     {
      name: "ICETCT Conference",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      description: "A comprehensive conference website built for the ICETCT Conference going to held in KIET college.",
      techStack: "Next.js",
      tags: ["Next.js", "TypeScript", "Framer Motion"],
      githubUrl: "https://icetct-25.vercel.app/",
      liveUrl: "https://icetct-25.vercel.app/",
      status: "Live"
    },
    {
      name: "AydiLOOKs",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
      description: "A fashion e-commerce platform with AI-powered recommendations, virtual try-on features, and seamless checkout experience. Includes admin dashboard for inventory management.",
      techStack: "Full Stack",
      tags: ["React", "Node.js", "PostegreSql","JWT"],
      githubUrl: "https://github.com/AydiLooks/aydilooks",
      liveUrl: "https://github.com/AydiLooks/aydilooks",
      status: "Completed"
    },
    {
      name: "Recipe Finder",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
      description: "A modern recipe discovery platform with advanced search filters, meal planning, and nutritional information. Built with React and integrated with multiple food APIs.",
      techStack: "React + API",
      tags: ["React", "REST API", "Tailwind CSS","Django"],
      githubUrl: "https://github.com/AvantikaSharma2307/Receipe-Project",
      liveUrl: "https://github.com/AvantikaSharma2307/Receipe-Project",
      status: "Completed"
    },
    {
      name: "GitHub User Finder",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80",
      description: "An intuitive tool to search and explore GitHub profiles with detailed statistics, repository analysis, and contribution graphs. Features responsive design and real-time data.",
      techStack: "React + GitHub API",
      tags: ["React", "GitHub API", "Tailwind CSS"],
      githubUrl: "https://github.com/AvantikaSharma2307/Innogeeks-web",
      liveUrl: "https://github.com/AvantikaSharma2307/Innogeeks-web",
      status: "Live"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20">
      {/* Header Section */}
      <motion.div
        className="mb-20 px-4"
        id="project"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3, once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Recent Works
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in full-stack development, 
            UI/UX design, and modern web technologies
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute left-1/4 top-40 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl -z-10" />
        <div className="absolute right-1/4 top-60 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl -z-10" />
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center mt-20"
      >
        <a
          href="https://github.com/AvantikaSharma2307"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
        >
          <FaGithub size={20} />
          View More on GitHub
        </a>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center py-8 mt-16 text-gray-400"
      >
        <p>Made with <span className="text-red-500">❤️</span> by Avantika Sharma</p>
      </motion.div>
    </div>
  );
}
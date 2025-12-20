import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload, FaArrowDown } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { NavLink } from "react-router-dom";

export default function Home() {
  const handleScroll = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="h-screen w-screen bg-black relative overflow-hidden " id="home">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" 
             style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" 
             style={{ animationDelay: '2s' }} />
        
        {/* Animated Stars */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-6"
          >
            {/* Greeting Badge */}
           
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                <span className="text-white">Hey 👋 I'm </span>
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-serif">
                  Avantika Sharma
                </span>
              </h1>
            </motion.div>

            {/* Animated Role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-2xl md:text-3xl text-purple-400 font-semibold"
            >
              <TypewriterText />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              A passionate Full Stack Developer crafting innovative web solutions with 
              modern technologies. I specialize in building responsive, scalable applications 
              that deliver exceptional user experiences.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <NavLink to="/resume"><button className="group px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2">
                <FaDownload className="group-hover:animate-bounce" />
                Download Resume
              </button></NavLink>

              <NavLink to="/project"><button className="px-8 py-4 border-2 text-white border-cyan-600 rounded-xl font-semibold hover:bg-cyan-600/20 hover:text-black transition-all duration-300">
                View Projects
              </button></NavLink>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex gap-4 justify-center lg:justify-start pt-4"
            >
              <NavLink
                to="https://github.com/AvantikaSharma2307"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-gray-600 rounded-lg flex items-center justify-center hover:border-cyan-500 hover:bg-cyan-500/20 transition-all hover:scale-110"
              >
                <FaGithub size={24} className="text-white" />
              </NavLink>
              <NavLink
                to="https://www.linkedin.com/in/avantika-sharma-a65b17250/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-gray-600 rounded-lg flex items-center justify-center hover:border-cyan-500 hover:bg-cyan-500/20 transition-all hover:scale-110"
              >
                <FaLinkedin size={24} className="text-white" />
              </NavLink>
              <NavLink
                to="https://codolio.com/profile/Avantika2307"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-gray-600 rounded-lg flex items-center justify-center hover:border-cyan-500 hover:bg-cyan-500/20 transition-all hover:scale-110"
              >
                <SiLeetcode size={24} className="text-white" />
              </NavLink>
            </motion.div>
          </motion.div>

          {/* Right Side - 3D Animation/Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Glowing Circle Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse" />
              
              {/* Main Circle */}
              <div className="relative w-96 h-96 rounded-full bg-gradient-to-br from-cyan-600/20 to-purple-600/20 border-2 border-cyan-500/30 flex items-center justify-center">
                {/* Inner animated rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-8 rounded-full border-2 border-dashed border-cyan-500/30"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-16 rounded-full border-2 border-dashed border-purple-500/30"
                />
                
                {/* Center Content */}
                <div className="relative z-10 text-center">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-cyan-600 to-purple-700 rounded-2xl flex items-center justify-center text-8xl font-bold shadow-2xl">
                    AS
                  </div>
                  <p className="mt-6 text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Full Stack Developer
                  </p>
                </div>

                {/* Floating Tech Icons */}
                <FloatingIcon icon="⚛️" position="top-4 left-8" delay={0} />
                <FloatingIcon icon="📱" position="top-16 right-4" delay={0.5} />
                <FloatingIcon icon="💻" position="bottom-8 left-4" delay={1} />
                <FloatingIcon icon="🚀" position="bottom-16 right-8" delay={1.5} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={handleScroll}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <FaArrowDown size={20} />
        </motion.div>
      </motion.div> */}

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-4 right-8 text-gray-500 text-sm"
      >
        Made with <span className="text-red-500">❤️</span> by Avantika Sharma
      </motion.div>
    </div>
  );
}

// Typewriter Text Component
function TypewriterText() {
  const roles = [
    "Full Stack Developer 💻",
    "React Enthusiast ⚛️",
    "Open Source Contributor 🌟",
    "Problem Solver 🧩"
  ];
  
  const [currentRole, setCurrentRole] = React.useState(0);
  const [displayText, setDisplayText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const role = roles[currentRole];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(role.substring(0, displayText.length + 1));
        
        if (displayText === role) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(role.substring(0, displayText.length - 1));
        
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <span>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

// Floating Icon Component
function FloatingIcon({ icon, position, delay }: { icon: string; position: string; delay: number }) {
  return (
    <motion.div
      className={`absolute ${position} text-4xl`}
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay: delay,
      }}
    >
      {icon}
    </motion.div>
  );
}
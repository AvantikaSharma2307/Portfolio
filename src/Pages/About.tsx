import { useEffect, useState } from 'react';
import { FaHtml5, FaCss3Alt, FaPython, FaGit, FaGithub, FaBootstrap, FaDownload, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { DiReact, DiJavascript1, DiDjango } from 'react-icons/di';
import { motion } from 'framer-motion';
import {
    SiCplusplus, SiTypescript, SiMysql, SiPostgresql, SiRedux, SiTailwindcss, SiNextdotjs,
    SiVisualstudiocode, SiVercel, SiDocker, SiMongodb, SiExpress,SiLeetcode
} from 'react-icons/si';
import { NavLink } from 'react-router-dom';
export default function About() {
    const [stats, setStats] = useState([
        { label: 'Years Experience', value: 0, target: 3 },
        { label: 'Projects Completed', value: 0, target: 15 },
        { label: 'Technologies', value: 0, target: 20 },
        { label: 'Open Source Contributions', value: 0, target: 50 }
    ]);

    useEffect(() => {
        // Animate stats counters
        const timer = setTimeout(() => {
            const interval = setInterval(() => {
                setStats(prev => prev.map(stat => {
                    if (stat.value < stat.target) {
                        return { ...stat, value: Math.min(stat.value + 1, stat.target) };
                    }
                    return stat;
                }));
            }, 50);
            return () => clearInterval(interval);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    const skillCategories = {
        frontend: [
            { icon: <FaHtml5 size={60} color="#E44D26" />, label: 'HTML5', level: 95 },
            { icon: <FaCss3Alt size={60} color="#1572B6" />, label: 'CSS3', level: 90 },
            { icon: <DiJavascript1 size={60} color="#F7E018" />, label: 'JavaScript', level: 88 },
            { icon: <SiTypescript size={60} color="#007ACC" />, label: 'TypeScript', level: 85 },
            { icon: <DiReact size={60} color="#61DAFB" />, label: 'React.js', level: 90 },
            { icon: <SiNextdotjs size={60} color="#ffffff" />, label: 'Next.js', level: 82 },
            { icon: <SiRedux size={60} color="#764ABC" />, label: 'Redux', level: 80 },
            { icon: <SiTailwindcss size={60} color="#38B2AC" />, label: 'Tailwind', level: 92 },
            { icon: <FaBootstrap size={60} color="#563D7C" />, label: 'Bootstrap', level: 85 }
        ],
        backend: [
            { icon: <FaPython size={55} color="#306998" />, label: 'Python', level: 85 },
            { icon: <DiDjango size={55} color="#092E20" />, label: 'Django', level: 80 },
            { icon: <SiExpress size={55} color="#00758F" />, label: 'Express.js', level: 82 },
            { icon: <SiMysql size={55} color="#00758F" />, label: 'MySQL', level: 78 },
            { icon: <SiMongodb size={55} color="#47A248" />, label: 'MongoDB', level: 80 },
            { icon: <SiPostgresql size={55} color="#336791" />, label: 'PostgreSQL', level: 75 }
        ],
        tools: [
            { icon: <FaGit size={55} color="#F05032" />, label: 'Git', level: 88 },
            { icon: <FaGithub size={55} color="#ffffff" />, label: 'Github', level: 88 },
            { icon: <SiDocker size={55} color='#2496ED' />, label: 'Docker', level: 75 },
            { icon: <SiVercel size={55} color="#ffffff" />, label: 'Vercel', level: 85 },
            { icon: <SiVisualstudiocode size={55} color="#007ACC" />, label: 'VSCode', level: 95 },
            { icon: <SiCplusplus size={55} color="#00599C" />, label: 'C++', level: 70 }
        ]
    };

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section with Stats */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative pt-32 pb-20"
                id="about"
            >
                {/* <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent" />
                <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
                <div className="absolute top-40 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" /> */}
                
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className='font-serif text-5xl md:text-7xl font-extrabold text-white text-center mb-4'
                >
                    About Me
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-center text-gray-400 text-xl mb-16"
                >
                    Building the future, one line of code at a time
                </motion.p>

                {/* Stats Counter */}
              
            </motion.div>

            {/* Main Content Grid */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
                
                {/* Profile Section with Image */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative bg-black border border-cyan-500/20 rounded-2xl p-8 md:p-12 mb-12 overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
                    
                    <div className="grid md:grid-cols-3 gap-8 relative z-10">
                        {/* Profile Image Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex justify-center items-center"
                        >
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />
                                <div className="relative w-48 h-48 md:w-56 md:h-56 bg-gradient-to-br from-cyan-600 to-purple-700 rounded-2xl flex items-center justify-center text-6xl font-bold">
                                    AS
                                </div>
                            </div>
                        </motion.div>

                        {/* About Text */}
                        <div className="md:col-span-2 space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <h2 className='text-cyan-400 text-3xl md:text-4xl font-bold mb-4 font-serif'>
                                    Who I Am?
                                </h2>
                                <h3 className='text-2xl md:text-3xl font-bold mb-4'>
                                    Avantika Sharma
                                </h3>
                                <p className='text-xl text-purple-400 mb-6'>Full Stack Developer</p>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className='text-gray-300 text-lg leading-relaxed'
                            >
                                A passionate Full Stack Developer with proffessional experience in crafting innovative web solutions. 
                                I specialize in building responsive, scalable, and user-centric applications using modern 
                                technologies. From intuitive front-end interfaces to robust back-end architectures, I bring 
                                ideas to life through clean, maintainable code and creative problem-solving.
                            </motion.p>

                            {/* Action Buttons */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-wrap gap-4 pt-4"
                            >
                                <NavLink to="/resume"><button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2">
                                    <FaDownload className="group-hover:animate-bounce" />
                                    Download Resume
                                </button></NavLink>

                                <NavLink to="/contact"><button className="px-8 py-4 border-2 border-cyan-600 rounded-xl font-semibold hover:bg-cyan-600/20 transition-all duration-300 flex items-center gap-2">
                                    <FaEnvelope />
                                    Contact Me
                                </button></NavLink>
                            </motion.div>

                            {/* Social Links */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="flex gap-4 pt-4"
                            >
                                <NavLink to="https://github.com/AvantikaSharma2307" className="w-12 h-12 border-2 border-gray-600 rounded-lg flex items-center justify-center hover:border-cyan-500 hover:bg-cyan-500/20 transition-all">
                                    <FaGithub size={24} />
                                </NavLink>
                                < NavLink to="https://www.linkedin.com/in/avantika-sharma-a65b17250/" className="w-12 h-12 border-2 border-gray-600 rounded-lg flex items-center justify-center hover:border-cyan-500 hover:bg-cyan-500/20 transition-all">
                                    <FaLinkedin size={24} />
                                </NavLink>
                                 <NavLink to="https://codolio.com/profile/Avantika2307" className="w-12 h-12 border-2 border-gray-600 rounded-lg flex items-center justify-center hover:border-cyan-500 hover:bg-cyan-500/20 transition-all">
                                    <SiLeetcode size={24} />
                                </NavLink>

                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Skills Section with Progress Bars */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-black border border-cyan-500/20 rounded-2xl p-8 md:p-12"
                >
                    <h2 className='text-cyan-400 text-3xl md:text-4xl font-bold mb-10 text-center font-serif'>
                        Technologies & Skills
                    </h2>

                    {/* Frontend Skills */}
                    <div className="mb-12">
                        <h3 className='text-2xl font-bold mb-6 text-purple-400'>Frontend Development</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {skillCategories.frontend.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="group relative"
                                >
                                    <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20">
                                        <div className="flex justify-center mb-3">
                                            {skill.icon}
                                        </div>
                                        <p className="text-center text-sm font-semibold text-gray-300 mb-2">
                                            {skill.label}
                                        </p>
                                        <div className="w-full bg-gray-700 rounded-full h-2">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.05 + 0.3, duration: 1 }}
                                                className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full"
                                            />
                                        </div>
                                        <p className="text-center text-xs text-gray-500 mt-1">{skill.level}%</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Backend Skills */}
                    <div className="mb-12">
                        <h3 className='text-2xl font-bold mb-6 text-purple-400'>Backend Development</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {skillCategories.backend.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="group relative"
                                >
                                    <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20">
                                        <div className="flex justify-center mb-3">
                                            {skill.icon}
                                        </div>
                                        <p className="text-center text-sm font-semibold text-gray-300 mb-2">
                                            {skill.label}
                                        </p>
                                        <div className="w-full bg-gray-700 rounded-full h-2">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.05 + 0.3, duration: 1 }}
                                                className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full"
                                            />
                                        </div>
                                        <p className="text-center text-xs text-gray-500 mt-1">{skill.level}%</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Tools */}
                    <div>
                        <h3 className='text-2xl font-bold mb-6 text-purple-400'>Tools & Languages</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {skillCategories.tools.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="group relative"
                                >
                                    <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20">
                                        <div className="flex justify-center mb-3">
                                            {skill.icon}
                                        </div>
                                        <p className="text-center text-sm font-semibold text-gray-300 mb-2">
                                            {skill.label}
                                        </p>
                                        <div className="w-full bg-gray-700 rounded-full h-2">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.05 + 0.3, duration: 1 }}
                                                className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full"
                                            />
                                        </div>
                                        <p className="text-center text-xs text-gray-500 mt-1">{skill.level}%</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

            </div>

            {/* Footer */}
           
        </div>
    );
}
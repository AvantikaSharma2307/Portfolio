import './main.css';
import { FaHtml5, FaCss3Alt, FaPython, FaGit, FaGithub, FaBootstrap } from 'react-icons/fa';
import { DiReact, DiJavascript1, DiDjango } from 'react-icons/di';

import { SiCplusplus, SiTypescript, SiMysql, SiPostgresql, SiRedux, SiTailwindcss, SiNextdotjs, SiVisualstudiocode, SiVercel, SiDocker, SiMongodb, SiExpress } from 'react-icons/si';
import { NavLink } from 'react-router-dom';

export default function About() {
    return (
        <>
            <h1 className='font-serif text-5xl md:text-7xl text-extrabold text-white flex items-center justify-center mt-16' id="about">About Me</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-white mx-4 md:mx-16 flex justify-center mt-24">
                <div className="card h-auto md:h-[40rem] p-6 bg-gray-800 rounded-lg shadow-lg">
                    <h1 className='text-cyan-600 text-2xl md:text-3xl hover:text-cyan-900 mb-6 font-serif'>Who I Am ?</h1>
                    <h1 className='text-2xl md:text-3xl text-extrabold font-mono mb-4'>My name is Avantika Sharma and I am a Full Stack Developer.</h1>
                    <p className='text-lg md:text-2xl text-bold text-gray-600 font-serif'>A passionate Full Stack Developer with 3 years of experience in web design and development. Skilled in both front-end and back-end technologies, 
                        I specialize in building responsive, scalable, and user-friendly web applications. Constantly expanding my expertise, 
                        I stay updated with the latest technologies and practices to deliver optimal solutions. Proficient in React, Django, Node.js,Docker and PostgreSQL, I focus on creating clean, maintainable code and improving user experiences.
                        </p>
                    <NavLink to="/resume">
                     <button className="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-grey-900
                      bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
                      RESUME
                     </button></NavLink>
                </div>
                <div className="card h-auto md:h-[40rem] p-6 bg-gray-800 rounded-lg shadow-lg">
                    <h1 className='text-cyan-600 text-2xl md:text-3xl hover:text-cyan-900 mb-6 font-serif'>Technologies I use</h1>
                    <h1 className='text-2xl md:text-3xl text-extrabold font-mono mb-4'>Front-End</h1>
                    <div className="flex flex-wrap gap-4 justify-center mb-4">
                        {/* Front-End Icons */}
                        {[
                            { icon: <FaHtml5 size={70} color="#E44D26" />, label: 'HTML' },
                            { icon: <FaCss3Alt size={70} color="#1572B6" />, label: 'CSS' },
                            { icon: <DiJavascript1 size={70} color="#F7E018" />, label: 'JavaScript' },
                            { icon: <FaBootstrap size={70} color="#563D7C" />, label: 'Bootstrap' },
                            { icon: <SiNextdotjs size={70} color="#000000" />, label: 'Next.js' },
                            { icon: <SiTailwindcss size={70} color="#38B2AC" />, label: 'Tailwind CSS' },
                            { icon: <SiTypescript size={70} color="#007ACC" />, label: 'TypeScript' },
                            { icon: <DiReact size={70} color="#61DAFB" />, label: 'React.js' },
                            { icon: <SiRedux size={70} color="#764ABC" />, label: 'Redux' },
                        ].map(({ icon, label }, index) => (
                            <div key={index} className="relative group flex items-center justify-center">
                                {icon}
                                <div className="absolute bottom-0 mb-8 bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {label}
                                </div>
                            </div>
                        ))}
                    </div>
                    <h2 className='text-2xl md:text-3xl text-extrabold font-mono mb-6'>Back-End</h2>
                    <div className="flex flex-wrap gap-4 justify-center mb-4">
                        {/* Back-End Icons */}
                        {[
                            { icon: <FaPython size={65} color="#306998" />, label: 'Python' },
                            { icon: <FaGit size={65} color="#F05032" />, label: 'Git' },
                            { icon: <FaGithub size={65} color="#181717" />, label: 'Github' },
                            { icon: <DiDjango size={65} color="#092E20" />, label: 'Django' },
                            { icon: <SiExpress size={65} color="#00758F" />, label: 'Express.js' },
                            { icon: <SiMysql size={65} color="#00758F" />, label: 'MySQL' },
                            { icon: <SiMongodb size={65} color="#00758F" />, label: 'Mongodb' },
                            { icon: <SiPostgresql size={65} color="#336791" />, label: 'PostgreSQL' },
                        ].map(({ icon, label }, index) => (
                            <div key={index} className="relative group flex items-center justify-center">
                                {icon}
                                <div className="absolute bottom-0 mb-8 bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {label}
                                </div>
                            </div>
                        ))}
                    </div>
                    <h2 className='text-2xl md:text-3xl text-extrabold font-mono mb-4'>Tools & Languages</h2>
                    <div className="flex flex-wrap gap-4 justify-center mb-4">
                        {/* Tools & Languages Icons */}
                        {[  {icon:<SiDocker size={65} color='#000000'/>,label:'Docker'},
                            { icon: <SiVercel size={65} color="#000000" />, label: 'Vercel' },
                            { icon: <SiVisualstudiocode size={65} color="#007ACC" />, label: 'VSCode' },
                            { icon: <SiCplusplus size={65} color="#00599C" />, label: 'C++' },
                        ].map(({ icon, label }, index) => (
                            <div key={index} className="relative group flex items-center justify-center">
                                {icon}
                                <div className="absolute bottom-0 mb-8 bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

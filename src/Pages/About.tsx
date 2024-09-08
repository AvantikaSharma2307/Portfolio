import './main.css';
import { FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { FaPython, FaGit, FaGithub, FaBootstrap, FaNodeJs } from 'react-icons/fa';
import { DiReact, DiJavascript1, DiCss3, DiHtml5, DiDjango } from 'react-icons/di';
import { SiCplusplus, SiTypescript, SiMysql, SiPostgresql, SiRedux, SiTailwindcss, SiNextdotjs, SiVisualstudiocode, SiVercel } from 'react-icons/si';
export default function About() {
    return (
        <>
            <h1 className='font-serif text-7xl text-extrabold text-white flex items-center justify-center mt-16'id="about">About Me</h1>
            <div className="grid grid-cols-2 gap-10 text-white mx-16 flex justify-center mt-24  ">
                <div className="card h-[40rem] ">
                    <h1 className='text-cyan-600 text-3xl hover:text-cyan-900 mb-16 font-serif'>Who I Am ?</h1>
                    <h1 className='text-3xl text-extrabold font-mono mb-4'>My name is Avantika Sharma and I am a Full stack Developer. </h1>
                    <p className='text-2xl text-bold text-gray-600 font serif'>I have been working on web designing and web development for 3years. Constantly updating the technologies I already master,
                        but also looking to learn new technologies to enrich my skills and improve my good practices as a developer.</p>
                </div>
                <div className="card h-[40rem] ">
                    <h1 className='text-cyan-600 text-3xl hover:text-cyan-900 mb-16 font-serif'> Technologies I use</h1>
                    <h1 className='text-3xl text-extrabold font-mono mb-4'>Front-End  </h1>
                    <div className="flex flex-wrap gap-4 justify-center mb-4">
                        <div className="relative group flex items-center justify-center">
                        <FaHtml5 size={70} color="#E44D26" />
                            <div className="absolute bottom-0 mb-8 bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Html
                            </div>
                        </div> <div className="relative group flex items-center justify-center">
                        <FaCss3Alt size={70} color="#1572B6" />
                            <div className="absolute bottom-0 mb-8 bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                CSS
                            </div>
                        </div> <div className="relative group flex items-center justify-center">
                        <DiJavascript1 size={70} color="#F7E018" />
                            <div className="absolute bottom-0 mb-8 bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                JavaScript
                            </div>
                        </div> <div className="relative group flex items-center justify-center">
                        <FaBootstrap size={70} color="#563D7C" />
                            <div className="absolute bottom-0 mb-8 bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Bootstrap
                            </div>
                        </div> <div className="relative group flex items-center justify-center">
                        <SiNextdotjs size={70} color="#000000" />
                            <div className="absolute bottom-0 mb-8 bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                NextJs
                            </div>
                        </div> <div className="relative group flex items-center justify-center">
                        <SiTailwindcss size={70} color="#38B2AC" />
                            <div className="absolute bottom-0 mb-8 bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Tailwind CSS
                            </div>
                        </div> <div className="relative group flex items-center justify-center">
                        <SiTypescript size={70} color="#007ACC" />
                            <div className="absolute bottom-0 mb-8 bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                               Typescript
                            </div>
                        </div> <div className="relative group flex items-center justify-center">
                        <DiReact size={70} color="#61DAFB" />
                            <div className="absolute bottom-0 mb-8 bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                React Js
                            </div>
                        </div> <div className="relative group flex items-center justify-center">
                        <SiRedux size={70} color="#764ABC" />
                            <div className="absolute bottom-0 mb-8 bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Redux
                            </div>
                        </div>
                    </div>
                    <h2 className='text-3xl text-extrabold font-mono mb-6'>Back-End</h2>
                    <div className="flex flex-wrap gap-4 justify-center mb-4">
                        <div className="relative group flex items-center justify-center">
                            <FaPython size={65} color="#306998" />
                            <div className="absolute bottom-0 mb-8 bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Python
                            </div>
                        </div>
                        <div className="relative group flex items-center justify-center">
                            <FaGit size={65} color="#F05032" />
                            <div className="absolute bottom-0 mb-8 bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Git
                            </div>
                        </div>
                        <div className="relative group flex items-center justify-center">
                            <FaGithub size={65} color="#181717" />
                            <div className="absolute bottom-0 mb-8 bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Github
                            </div>
                        </div>
                        <div className="relative group flex items-center justify-center">
                            <DiDjango size={65} color="#092E20" />
                            <div className="absolute bottom-0 mb-8 bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Django
                            </div>
                        </div>
                        
                        <div className="relative group flex items-center justify-center">
                            <SiMysql size={65} color="#00758F" />
                            <div className="absolute bottom-0 mb-8 bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                MySql
                            </div>
                        </div>
                        <div className="relative group flex items-center justify-center">
                            <SiPostgresql size={65} color="#336791" />
                            <div className="absolute bottom-0 mb-8 bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                PostregreSql
                            </div>
                        </div>
                        
                    </div>
                    <h2 className='text-3xl text-extrabold font-mono mb-4'>Tools & Languages</h2>
                    <div className="flex flex-wrap gap-4 justify-center mb-4">
                    <div className="relative group flex items-center justify-center">
                            <SiVercel size={65} color="#000000" />
                            <div className="absolute bottom-0 mb-8 bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Vercel
                            </div>
                        </div>
                    <div className="relative group flex items-center justify-center">
                             <SiVisualstudiocode size={65} color="#007ACC" />
                            <div className="absolute bottom-0 mb-8 bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                VsCode
                            </div>
                        </div>
                        <div className="relative group flex items-center justify-center">
                            <SiCplusplus size={65} color="#00599C" />
                            <div className="absolute bottom-0 mb-8 bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                C++
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

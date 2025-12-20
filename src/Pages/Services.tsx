import { FaDesktop, FaPencilRuler, FaCode, FaMobile, FaServer, FaPalette, FaRocket, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
  gradient: string;
}

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, delay: i * 0.15 } 
    }),
  };

  const services: Service[] = [
    {
      icon: <FaDesktop className="text-5xl" />,
      title: "Web Development",
      description: "Creating responsive, high-performance websites with modern frameworks and best practices.",
      features: ["React & Next.js", "Responsive Design", "SEO Optimization", "Performance Tuning"],
      color: "cyan",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: <FaCode className="text-5xl" />,
      title: "Custom Software",
      description: "Building tailored software solutions that streamline operations and solve business challenges.",
      features: ["Full Stack Development", "API Integration", "Database Design"],
      color: "emerald",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: <FaServer className="text-5xl" />,
      title: "Backend Solutions",
      description: "Architecting robust backend systems with scalable databases and efficient APIs.",
      features: ["RESTful APIs", "Database Management", "Authentication", "Microservices"],
      color: "indigo",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="services" className="min-h-screen bg-black text-white py-20 px-4 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >

        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          My Services
        </h2>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          Comprehensive solutions to bring your digital vision to life with cutting-edge technology and creative design
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* Glowing Border Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500`} />
              
              {/* Card */}
              <div className="relative bg-black border border-cyan-500/20 rounded-2xl p-8 h-full flex flex-col transition-all duration-500 group-hover:border-transparent">
                {/* Icon with animated background */}
                <div className="relative mb-6">
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                      rotate: hoveredIndex === index ? 360 : 0
                    }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 mx-auto rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shadow-lg`}
                  >
                    {service.icon}
                  </motion.div>
                  
                  {/* Floating particles */}
                  {hoveredIndex === index && (
                    <>
                      <motion.div
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: [0, 1, 0], y: -30 }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`absolute top-0 left-1/4 w-2 h-2 bg-${service.color}-400 rounded-full`}
                      />
                      <motion.div
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: [0, 1, 0], y: -30 }}
                        transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
                        className={`absolute top-0 right-1/4 w-2 h-2 bg-${service.color}-400 rounded-full`}
                      />
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-center mb-3 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-center text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="mt-auto space-y-2">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-2 text-sm text-gray-500"
                      >
                        <FaCheckCircle className={`text-${service.color}-400 flex-shrink-0`} />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Hover Indicator */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: hoveredIndex === index ? '100%' : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.gradient} rounded-b-2xl`}
                />
              </div>
            </motion.div>
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
        <p className="text-gray-400 mb-6 text-lg">Ready to start your project?</p>
        <NavLink to="/contact"><button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2 mx-auto">
          <FaRocket className="group-hover:animate-bounce" />
          Let's Work Together
        </button></NavLink>
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
    </section>
  );
}
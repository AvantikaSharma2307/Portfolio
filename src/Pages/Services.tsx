import { FaDesktop, FaPencilRuler, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Services() {
  // Animation variants for entrance
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
    <section id="services" className="py-16 mt-14 px-4">
      <h2 className="text-5xl text-center text-white font-bold mb-12 font-serif">
        My Services
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div
          className="service-card bg-zinc-950 text-white rounded-lg shadow-lg p-6 transition transform hover:scale-105 hover:bg-emerald-600"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: false }} // Keeps the animation active while scrolling both up and down
        >
          <FaDesktop className="text-5xl mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold text-center mb-2">Web Development</h3>
          <p className="text-center text-gray-300">
            I create responsive and interactive websites with the latest web technologies to ensure a seamless user experience.
          </p>
        </motion.div>

        <motion.div
          className="service-card bg-zinc-950 text-white rounded-lg shadow-lg p-6 transition transform hover:scale-105 hover:bg-green-600"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: false }} // Keeps the animation active while scrolling both up and down
        >
          <FaPencilRuler className="text-5xl mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold text-center mb-2">UI/UX Design</h3>
          <p className="text-center text-gray-300">
            I design user-friendly and visually appealing interfaces that provide an optimal user experience.
          </p>
        </motion.div>

        <motion.div
          className="service-card bg-zinc-950 text-white rounded-lg shadow-lg p-6 transition transform hover:scale-105 hover:bg-purple-600"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: false }} // Keeps the animation active while scrolling both up and down
        >
          <FaCode className="text-5xl mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold text-center mb-2">Custom Software</h3>
          <p className="text-center text-gray-300">
            I develop custom software solutions to help businesses automate processes and solve complex problems.
          </p>
        </motion.div>
      </div>
    </section>
    <p className="text-center text-white fixed bottom-0 left-0 w-full py-3 bg-black z-50">
  Made with ❤️ by Avantika Sharma
</p>

    </>
  );
}

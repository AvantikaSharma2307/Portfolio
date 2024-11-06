import { FaDesktop, FaPencilRuler, FaCode } from 'react-icons/fa';

export default function Services() {
  return (
    <section id="services" className=" py-16  mt-14 px-4">
      <h2 className="text-5xl text-center text-white font-bold mb-12 font-serif">
        My Services
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="service-card bg-zinc-950 text-white rounded-lg shadow-lg p-6 transition transform hover:scale-105 hover:bg-emerald-600">
          <FaDesktop className="text-5xl mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold text-center mb-2">Web Development</h3>
          <p className="text-center text-gray-300">
            I create responsive and interactive websites with the latest web technologies to ensure a seamless user experience.
          </p>
        </div>

        <div className="service-card bg-zinc-950 text-white rounded-lg shadow-lg p-6 transition transform hover:scale-105 hover:bg-green-600">
          <FaPencilRuler className="text-5xl mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold text-center mb-2">UI/UX Design</h3>
          <p className="text-center text-gray-300">
            I design user-friendly and visually appealing interfaces that provide an optimal user experience.
          </p>
        </div>

        <div className="service-card bg-zinc-950 text-white rounded-lg shadow-lg p-6 transition transform hover:scale-105 hover:bg-purple-600">
          <FaCode className="text-5xl mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold text-center mb-2">Custom Software</h3>
          <p className="text-center text-gray-300">
            I develop custom software solutions to help businesses automate processes and solve complex problems.
          </p>
        </div>
      </div>
    </section>
  );
}

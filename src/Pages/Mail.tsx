import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import './main.css';
import { useState, FormEvent, useRef } from "react";
import { motion } from "framer-motion";
//  @ts-ignore
import emailjs from '@emailjs/browser';

export default function Mail() {
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm('service_dpkw8ie', 'template_tfvwdon', form.current, '3VXlmYe5EW1ZQSDGe')
      .then(
        () => {
          setSuccess("Sent Successfully");
          setError("");
          form.current?.reset();
        },
        (error) => {
          setError('FAILED... ' + error.text);
          setSuccess("");
        }
      );
  };

  return (
    <>
      <motion.h1
        className="text-white flex justify-center text-4xl font-bold font-serif mt-14 mb-14"
        id="contact"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
      >
        Let's get Connected..
      </motion.h1>

      <motion.div
        className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:ml-44 flex justify-center gap-2 mb-14"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
      >
        <motion.a
          href="https://www.linkedin.com/in/avantika-sharma-a65b17250/"
          className="text-white flex justify-center text-4xl hover:text-gray-600"
          whileHover={{ scale: 1.2, rotate: 10, transition: { duration: 0.3 } }}
        >
          <FaLinkedinIn className="lg:mr-14" />
        </motion.a>
        <motion.a
          href="https://x.com/Avantika230703"
          className="text-white flex justify-center text-4xl hover:text-gray-600"
          whileHover={{ scale: 1.2, rotate: 10, transition: { duration: 0.3 } }}
        >
          <FaTwitter />
        </motion.a>
        <motion.a
          href="https://github.com/AvantikaSharma2307"
          className="text-white flex justify-center text-4xl hover:text-gray-600"
          whileHover={{ scale: 1.2, rotate: 10, transition: { duration: 0.3 } }}
        >
          <FaGithub />
        </motion.a>
      </motion.div>

      <motion.div
        className="form-container flex justify-center items-center px-5 md:px-10 lg:px-20 py-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
      >
        <form ref={form} onSubmit={sendEmail} className="w-full max-w-lg">
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          {success && <p className="text-green-500 text-center mt-4">{success}</p>}

          <motion.div
            className="form-group mb-6"
            whileFocus={{ scale: 1.05 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <label htmlFor="name" className="block text-white mb-2">Name</label>
            <input
              name="user_name"
              id="name"
              type="text"
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </motion.div>

          <motion.div
            className="form-group mb-6"
            whileFocus={{ scale: 1.05 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <label htmlFor="email" className="block text-white mb-2">Email</label>
            <input
              name="user_email"
              id="email"
              type="email"
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </motion.div>

          <motion.div
            className="form-group mb-6"
            whileFocus={{ scale: 1.05 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <label htmlFor="textarea" className="block text-white mb-2">How Can We Help You?</label>
            <textarea
              id="textarea"
              name="message"
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Submit
          </motion.button>
        </form>
    
      </motion.div>
      <p className="text-center text-white mt-14">Made with ❤️ by Avantika Sharma</p>
    </>
  );
}

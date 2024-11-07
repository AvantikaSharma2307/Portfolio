import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import './main.css';
import { useState, FormEvent, useRef } from "react";
//  @ts-ignore
import emailjs from '@emailjs/browser';

// Ensure proper types for the ref
export default function Mail() {
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  // Initialize form ref with correct type
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (!form.current) return; // Ensure the form ref is not null

    emailjs
      .sendForm('service_dpkw8ie', 'template_tfvwdon', form.current, '3VXlmYe5EW1ZQSDGe')
      .then(
        () => {
          setSuccess("Sent Successfully");
          setError(""); // Clear any previous error
          form.current?.reset(); // Reset form on success
        },
        (error) => {
          setError('FAILED... ' + error.text);
          setSuccess(""); // Clear any previous success message
        }
      );
  };

  return (
    <>
      <h1
        className="text-white flex justify-center text-4xl font-bold font-serif mt-14 mb-14"
        id="contact"
      >
        Let's get Connected..
      </h1>

      <div className="grid grid-cols-4  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:ml-44 flex justify-center gap-2 mb-14">
        <a
          href="https://www.linkedin.com/in/avantika-sharma-a65b17250/"
          className="text-white flex justify-center text-4xl hover:text-gray-600"
        >
          <FaLinkedinIn className="lg:mr-14" />
        </a>
        <a
          href="https://x.com/Avantika230703"
          className="text-white flex justify-center text-4xl hover:text-gray-600"
        >
          <FaTwitter />
        </a>
        <a
          href="https://github.com/AvantikaSharma2307"
          className="text-white flex justify-center text-4xl hover:text-gray-600"
        >
          <FaGithub />
        </a>
      </div>

     <div className="form-container flex justify-center items-center px-5 md:px-10 lg:px-20 py-10">
  {error && <p className="text-red-500 text-center mt-4">{error}</p>}
  {success && <p className="text-green-500 text-center mt-4">{success}</p>}

  <form ref={form} onSubmit={sendEmail} className="w-full max-w-lg">
    <div className="form-group mb-6">
      <label htmlFor="name" className="block text-white mb-2">Name</label>
      <input
        name="user_name"
        id="name"
        type="text"
        required
        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
      />
    </div>

    <div className="form-group mb-6">
      <label htmlFor="email" className="block text-white mb-2">Email</label>
      <input
        name="user_email"
        id="email"
        type="email"
        required
        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
      />
    </div>

    <div className="form-group mb-6">
      <label htmlFor="textarea" className="block text-white mb-2">How Can We Help You?</label>
      <textarea
        id="textarea"
        name="message"
        required
        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
      ></textarea>
    </div>

    <button
      type="submit"
      className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300"
    >
      Submit
    </button>
  </form>
</div>

    </>
  );
}

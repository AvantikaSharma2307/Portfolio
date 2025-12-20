import { FaLinkedinIn, FaTwitter, FaGithub, FaEnvelope, FaPaperPlane, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { useState, FormEvent, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
//  @ts-ignore
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;

    setIsSubmitting(true);
    setError("");
    setSuccess("");

    emailjs
      .sendForm('service_dpkw8ie', 'template_tfvwdon', form.current, '3VXlmYe5EW1ZQSDGe')
      .then(
        () => {
          setSuccess("Message sent successfully! I'll get back to you soon. ✨");
          setError("");
          setFormData({ name: '', email: '', message: '' });
          form.current?.reset();
          setIsSubmitting(false);
          
          setTimeout(() => setSuccess(''), 5000);
        },
        (error) => {
          setError('Failed to send message. Please try again.');
          setSuccess("");
          setIsSubmitting(false);
        }
      );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      icon: <FaLinkedinIn size={24} />,
      url: "https://www.linkedin.com/in/avantika-sharma-a65b17250/",
      label: "LinkedIn",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaTwitter size={24} />,
      url: "https://x.com/Avantika230703",
      label: "Twitter",
      color: "from-sky-500 to-sky-600"
    },
    {
      icon: <FaGithub size={24} />,
      url: "https://github.com/AvantikaSharma2307",
      label: "GitHub",
      color: "from-gray-700 to-gray-800"
    }
  ];

  return (
    <section id="contact" className="min-h-screen bg-black text-white py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >

        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          Have a project in mind or just want to connect? Feel free to reach out!
        </p>
      </motion.div>

      {/* Main Content Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-1 space-y-6"
        >
          {/* Contact Info */}
          <div className="bg-black border border-cyan-500/20 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-6 text-cyan-400">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <p className="text-white">avantikasharma2307@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Location</p>
                  <p className="text-white">Ghaziabad, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Availability</p>
                  <p className="text-white">Open to opportunities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-black border border-cyan-500/20 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-6 text-cyan-400">Follow Me</h3>
            
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-4 p-3 bg-gray-900 border border-gray-700 rounded-xl hover:border-cyan-500 transition-all group"
                >
                  <div className={`w-10 h-10 bg-gradient-to-br ${social.color} rounded-lg flex items-center justify-center`}>
                    {social.icon}
                  </div>
                  <span className="text-gray-400 group-hover:text-white transition-colors">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <div className="bg-black border border-cyan-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">Send Me a Message</h3>
            
           <form ref={form} onSubmit={sendEmail}>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Your Name *
                  </label>
                  <input
                    name="name"
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="John Doe"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Your Email *
                  </label>
                  <input
                    name="email"
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    placeholder="Tell me about your project or just say hi!"
                  />
                </motion.div>

                <motion.button
                  onClick={sendEmail}
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>

            {/* Success/Error Messages */}
            <AnimatePresence>
              {(success || error) && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`mt-6 p-4 rounded-xl border ${
                    success
                      ? 'bg-green-500/10 border-green-500/30 text-green-400'
                      : 'bg-red-500/10 border-red-500/30 text-red-400'
                  }`}
                >
                  <p>{success || error}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

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
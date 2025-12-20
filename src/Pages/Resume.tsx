import { useRef, useState } from 'react';
import { FaDownload, FaEye, FaArrowLeft, FaCheckCircle, FaEnvelope, FaFilePdf } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
// @ts-ignore
import emailjs from '@emailjs/browser';

const RESUME_URL = "/MyFinalizedResume.pdf";

export default function Resume() {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleBackToHome = () => {
    window.location.href = '/';
  };

  const handleViewResume = () => {
    window.open(RESUME_URL, '_blank');
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (!userEmail) {
      setError('Please enter your email address');
      return;
    }

    setIsDownloading(true);
    
    // Send notification email
    sendDownloadNotification();
    
    // Trigger download
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = RESUME_URL;
      link.download = 'Avantika_Sharma_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setIsDownloading(false);
      setShowEmailForm(false);
      setUserEmail('');
      setSuccess('Resume downloaded successfully! 🎉');
      
      setTimeout(() => setSuccess(''), 3000);
    }, 1000);
  };

  const sendDownloadNotification = () => {
    if (!form.current) return;

    const messageInput = form.current.querySelector('input[name="message"]') as HTMLInputElement;
    if (messageInput) {
      messageInput.value = `Resume downloaded by: ${userEmail}`;
    }

    emailjs
      .sendForm('service_dpkw8ie', 'template_tfvwdon', form.current, '3VXlmYe5EW1ZQSDGe')
      .then(
        () => {
          console.log('Notification sent successfully');
        },
        (error) => {
          console.error('Failed to send notification:', error);
        }
      );
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block p-6 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-3xl mb-6 shadow-lg shadow-cyan-500/30"
          >
            <FaFilePdf size={64} className="text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-serif"
          >
            My Resume
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-lg"
          >
            View or download my professional resume
          </motion.p>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-black border border-cyan-500/20 rounded-2xl p-8 mb-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <button
              onClick={handleBackToHome}
              className="group relative p-4 bg-gray-900 border border-gray-700 rounded-xl hover:border-cyan-500 transition-all duration-300 flex flex-col items-center gap-2"
            >
              <FaArrowLeft className="text-2xl text-gray-400 group-hover:text-cyan-400 transition-colors" />
              <span className="text-sm text-gray-400 group-hover:text-white transition-colors">Back Home</span>
            </button>

            <button
              onClick={handleViewResume}
              className="group relative p-4 bg-gray-900 border border-gray-700 rounded-xl hover:border-blue-500 transition-all duration-300 flex flex-col items-center gap-2"
            >
              <FaEye className="text-2xl text-gray-400 group-hover:text-blue-400 transition-colors" />
              <span className="text-sm text-gray-400 group-hover:text-white transition-colors">View Resume</span>
            </button>

            <button
              onClick={() => setShowEmailForm(true)}
              disabled={showEmailForm}
              className="group relative p-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex flex-col items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaDownload className="text-2xl text-white group-hover:animate-bounce" />
              <span className="text-sm text-white font-semibold">Download</span>
            </button>
          </div>

          {/* Email Form */}
          <AnimatePresence>
            {showEmailForm && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="border-t border-cyan-500/20 pt-6 mt-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                        <FaEnvelope className="text-cyan-400" />
                        Enter your email to download
                      </label>
                      <input
                        type="email"
                        value={userEmail}
                        onChange={(e) => {
                          setUserEmail(e.target.value);
                          setError('');
                        }}
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                        required
                      />
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => {
                          setShowEmailForm(false);
                          setUserEmail('');
                          setError('');
                        }}
                        className="flex-1 px-6 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white hover:border-gray-600 transition-all"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleDownload}
                        disabled={isDownloading}
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {isDownloading ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            />
                            Downloading...
                          </>
                        ) : (
                          <>
                            <FaDownload />
                            Download
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Success/Error Messages */}
        <AnimatePresence>
          {(success || error) && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`p-4 rounded-xl border ${
                success
                  ? 'bg-green-500/10 border-green-500/30 text-green-400'
                  : 'bg-red-500/10 border-red-500/30 text-red-400'
              } flex items-center gap-3`}
            >
              {success && <FaCheckCircle className="text-xl" />}
              <p>{success || error}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-500 text-sm">
            Your email will only be used for download notification purposes
          </p>
        </motion.div>
      </motion.div>

      {/* Hidden form for EmailJS */}
      <div style={{ display: 'none' }}>
        <div ref={form as any}>
          <input type="text" name="message" value="" readOnly />
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 text-center w-full text-gray-400"
      >
        <p>Made with <span className="text-red-500">❤️</span> by Avantika Sharma</p>
      </motion.div>
    </div>
  );
}
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

// URL to your resume file
const RESUME_URL = "/MyFinalizedResume.pdf";

const Resume = () => {
  const [display, setDisplay] = useState(0); 
  const form = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [userEmail, setUserEmail] = useState(''); 

  const navigate = useNavigate();

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    // Notify the user that the download has started
    alert('Your download is starting...');

    // Send notification email
    sendDownloadNotification();
    
    // Create an anchor element to trigger the download
    const link = document.createElement('a');
    link.href = RESUME_URL;
    link.download = 'MyFinalizedResume.pdf'; // Specify the name for the downloaded file
    document.body.appendChild(link);
    link.click(); // Programmatically click the link to trigger the download
    document.body.removeChild(link); // Clean up and remove the link
    setDisplay(0);
  };

  const sendDownloadNotification = () => {
    if (!form.current) return; // Ensure the form ref is not null

    // Update the message in the hidden form with the user's email
    const messageInput = form.current.querySelector('input[name="message"]') as HTMLInputElement;
    if (messageInput) {
      messageInput.value = `Your resume has been downloaded by: ${userEmail}`; // Customize the message
    }

    emailjs
      .sendForm('service_dpkw8ie', 'template_tfvwdon', form.current, '3VXlmYe5EW1ZQSDGe')
      .then(
        () => {
          setSuccess("Notification sent successfully!");
          setError(""); // Clear any previous error
          form.current?.reset(); // Reset form on success
        },
        (error) => {
          setError('Failed to send notification: ' + error.text);
          setSuccess(""); // Clear any previous success message
        }
      );
  };

  return (
    <>
    <div className="resume-buttons pt-44 flex justify-center">
      <button
        onClick={() => navigate('/')}
        className="bg-red-500 text-white px-4 py-2 rounded mr-2"
      >Back to Home</button>
      <button
        onClick={() => window.open(RESUME_URL, '_blank')}
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
      >
        View Resume
      </button>
      <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => setDisplay(display === 0 ? 1 : 0)}>
          Download Resume 
        </button>
        {/* console.log(display); */}
        {(display===1)?
      <form ref={form} onSubmit={handleDownload} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="form-group mb-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="user_email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)} // Update state on input change
            required
            placeholder="Enter your email"
            className="border rounded px-2 py-1"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded">
          Done!
        </button>
      </form>
      :null
}
</div>
     
      <div>
         {/* Hidden form for EmailJS */}
      <form ref={form} style={{ display: 'none' }}>
        <input type="text" name="message" value="" readOnly />
      </form>
      <br></br>
      {success && <p className="text-green-500 text-center">{success}</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}
      </div>
      </>
  );
};

export default Resume;
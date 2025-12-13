import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import AnimatedSection from './AnimatedSection';
import { MailIcon, PhoneIcon } from './Icons';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setStatus('');

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('Thank you! Your message has been sent.');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('Failed to send message. Please try again or email directly.');
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <AnimatedSection className="py-24" id="contact">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 font-heading tracking-wider">
          LET'S <span className="aurora-text">CONNECT</span>
        </h2>
        <p className="text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
          I'm currently open to internship and placement opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-12">
        <a href="mailto:u.arunbabya1234@gmail.com" className="flex items-center gap-3 group text-lg">
          <MailIcon className="w-6 h-6 text-accent-1 transition-transform duration-300 group-hover:scale-110" />
          <span className="text-text-secondary group-hover:text-white transition-colors duration-300">u.arunbabya1234@gmail.com</span>
        </a>
        <a href="tel:+919542419591" className="flex items-center gap-3 group text-lg">
          <PhoneIcon className="w-6 h-6 text-accent-2 transition-transform duration-300 group-hover:scale-110" />
          <span className="text-text-secondary group-hover:text-white transition-colors duration-300">+91 95424 19591</span>
        </a>
      </div>

      <div className="max-w-xl mx-auto glass-card rounded-2xl p-8 shadow-lg glowing-edge">
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="user_name" className="block text-text-secondary text-sm font-medium mb-2 tracking-wider uppercase">Your Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full bg-black/20 border border-white/10 rounded-lg py-2.5 px-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-1 focus:border-accent-1 transition-all"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="user_email" className="block text-text-secondary text-sm font-medium mb-2 tracking-wider uppercase">Your Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full bg-black/20 border border-white/10 rounded-lg py-2.5 px-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-1 focus:border-accent-1 transition-all"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-text-secondary text-sm font-medium mb-2 tracking-wider uppercase">Message</label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full bg-black/20 border border-white/10 rounded-lg py-2.5 px-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-1 focus:border-accent-1 transition-all"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="gradient-button px-8 py-3 text-white font-bold rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
          {status && <p className={`text-center mt-4 ${status.includes('Failed') ? 'text-red-400' : 'aurora-text'}`}>{status}</p>}
        </form>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
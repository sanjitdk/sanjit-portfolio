import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabaseClient';
import { Send, Mail, MapPin, CheckCircle, AlertCircle, Phone } from 'lucide-react';

// Re-using the icons from our previous step
const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          { 
            name: formData.name, 
            email: formData.email, 
            message: formData.message 
          }
        ]);

      if (error) throw error;

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000); // Reset after 5s
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-bold mb-8 font-mono">
            <span className="text-[#00F5FF]">07.</span> Get In Touch
          </h2>
          <p className="text-gray-400 mb-12 max-w-md">
            I'm currently seeking AI/ML or Robotics internships. Whether you have a question or just want to discuss technology, drop me a message.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-gray-400 font-mono text-sm">
              <MapPin className="text-[#00F5FF]" size={20} /> Bangalore, India 🇮🇳
            </div>
            <div className="flex items-center gap-4 text-gray-400 font-mono text-sm">
              <Mail className="text-[#00F5FF]" size={20} /> sanjitdineshkrishnan@gmail.com
            </div>
            <div className="flex items-center gap-4 text-gray-400 font-mono text-sm">
    <Phone className="text-[#00F5FF]" size={20} /> +91 97311 07755
  </div>
          </div>

          <div className="flex gap-4 mt-12">
            <a href="https://github.com/sanjdk" target="_blank" className="w-12 h-12 glass-card rounded-lg flex items-center justify-center text-gray-400 hover:text-[#00F5FF] transition-all">
              <GitHubIcon />
            </a>
            <a href="https://linkedin.com/in/sanjit-dk" target="_blank" className="w-12 h-12 glass-card rounded-lg flex items-center justify-center text-gray-400 hover:text-[#00F5FF] transition-all">
              <LinkedInIcon />
            </a>
          </div>
        </div>

        <motion.form 
          onSubmit={handleSubmit}
          className="glass-card p-8 rounded-2xl border border-white/5 relative overflow-hidden"
        >
          <div className="space-y-4">
            <input 
              type="text" 
              placeholder="Your Name"
              required
              className="w-full bg-white/5 border border-white/10 p-4 rounded-lg focus:border-[#00F5FF] outline-none transition-colors text-white"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <input 
              type="email" 
              placeholder="Your Email"
              required
              className="w-full bg-white/5 border border-white/10 p-4 rounded-lg focus:border-[#00F5FF] outline-none transition-colors text-white"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <textarea 
              rows="5" 
              placeholder="Your Message"
              required
              className="w-full bg-white/5 border border-white/10 p-4 rounded-lg focus:border-[#00F5FF] outline-none transition-colors text-white"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
            
            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="w-full bg-[#00F5FF] text-black font-bold py-4 rounded-lg hover:bg-[#00F5FF]/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {status === 'loading' ? 'TRANSMITTING...' : 'SEND MESSAGE'}
              <Send size={18} />
            </button>
          </div>

          {/* Feedback Overlay */}
          <AnimatePresence>
            {status === 'success' && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-0 bg-[#0A0A0F]/95 flex flex-col items-center justify-center text-center p-6"
              >
                <CheckCircle size={48} className="text-green-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Message Received</h3>
                <p className="text-gray-400 text-sm">Successfully synced with Sanjit's database.</p>
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-0 bg-[#0A0A0F]/95 flex flex-col items-center justify-center text-center p-6"
              >
                <AlertCircle size={48} className="text-red-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Transmission Failed</h3>
                <p className="text-gray-400 text-sm">Please check your connection or try again.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}
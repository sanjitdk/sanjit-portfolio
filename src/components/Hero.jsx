import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowDown, FileText } from 'lucide-react';

export default function Hero() {
  const [text, setText] = useState('');
  const roles = ["AI / ML Engineer", "Robotics Enthusiast", "Full-Stack Developer"];
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    let currentText = '';
    let isDeleting = false;
    let speed = 100;

    const type = () => {
      const fullText = roles[roleIdx];
      if (isDeleting) {
        currentText = fullText.substring(0, currentText.length - 1);
        speed = 50;
      } else {
        currentText = fullText.substring(0, currentText.length + 1);
        speed = 100;
      }

      setText(currentText);

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => isDeleting = true, 2000);
      } else if (isDeleting && currentText === '') {
        isDeleting = false;
        setRoleIdx((prev) => (prev + 1) % roles.length);
      }
      setTimeout(type, speed);
    };

    const timeout = setTimeout(type, 500);
    return () => clearTimeout(timeout);
  }, [roleIdx]);

  return (
    <section className="h-screen flex flex-col justify-center px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#00F5FF] font-mono mb-4"
        >
          &gt; Initializing sequence...
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
        >
          Sanjit Dinesh <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5FF] to-[#FFB347]">
            Krishnan
          </span>
        </motion.h1>

        <div className="h-10 mb-12">
          <p className="text-2xl md:text-3xl text-gray-400 font-mono">
            {text}<span className="animate-pulse">_</span>
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[#00F5FF] text-black font-bold rounded-sm flex items-center gap-2"
          >
            View Projects
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 245, 255, 0.1)' }}
            className="px-8 py-4 border border-[#00F5FF] text-[#00F5FF] font-bold rounded-sm flex items-center gap-2"
          >
            <FileText size={20} />
            <a href="/sanjitdkresume.pdf" target="_blank" rel="noreferrer">
  Download Resume
</a>
          </motion.button>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 hidden md:block">
        <div className="flex items-center gap-3 glass-card px-4 py-2 rounded-full border border-[#00F5FF]/30">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#00F5FF]">
            Open to Internships — Summer 2026
          </span>
        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
}
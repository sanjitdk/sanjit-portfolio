import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { Terminal, Cpu, CheckCircle } from 'lucide-react';

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const exp = {
    company: "Indian Institute of Astrophysics",
    title: "End-to-End Web Portal for PhD-to-Postdoctoral Application Processing",
    location: "Bangalore, India",
    period: "Summer 2025",
    tags: ["Python", "PostgreSQL", "Bootstrap", "SMTP Auth", "Web Engineering"],
  };

  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-16 flex items-center gap-4 font-mono">
        <span className="text-[#00F5FF]">02.</span> Experience
      </h2>

      <div ref={containerRef} className="relative pl-8 md:pl-12">
        {/* Animated Timeline Line */}
        <motion.div 
          style={{ scaleY }}
          className="absolute left-0 top-0 w-[2px] h-full bg-gradient-to-b from-[#00F5FF] to-transparent origin-top shadow-[0_0_15px_rgba(0,245,255,0.3)]"
        />

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="glass-card p-8 rounded-xl relative border-l-4 border-l-[#00F5FF]"
        >
          {/* Timeline Dot */}
          <div className="absolute -left-[45px] md:-left-[53px] top-8 w-4 h-4 rounded-full bg-[#0A0A0F] border-2 border-[#00F5FF] shadow-[0_0_10px_rgba(0,245,255,0.8)]" />
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-1 leading-tight">
                {exp.title}
              </h3>
              <p className="text-[#00F5FF] font-mono font-bold uppercase tracking-wider text-sm">
                {exp.company}
              </p>
            </div>
            <div className="text-left md:text-right mt-4 md:mt-0 font-mono text-xs text-gray-500">
              <p>{exp.period}</p>
              <p>{exp.location}</p>
            </div>
          </div>

          <div className="space-y-6 text-gray-400 leading-relaxed">
            {/* The Context */}
            <p className="text-sm italic border-l-2 border-white/10 pl-4">
              The Indian Institute of Astrophysics required a complex, multi-role digital ecosystem to manage internal workflows—where Applicants, Chairs, and Referees operated within distinct permission boundaries through a unified interface.
            </p>

            {/* What I Built */}
            <div className="space-y-2">
              <h4 className="text-white font-bold flex items-center gap-2 text-sm uppercase tracking-widest font-mono">
                <Terminal size={16} className="text-[#00F5FF]" /> What I Built
              </h4>
              <p className="text-sm">
                Developed a Python-based platform featuring a dynamic <span className="text-[#00F5FF]">"Auto-Save"</span> form system. Engineered the frontend to synchronize instantly with a <span className="text-white">PostgreSQL database</span>, transforming a tedious multi-page process into a fluid, single-page experience where no data was ever lost mid-session.
              </p>
            </div>

            {/* The Hard Problem */}
            <div className="space-y-2 p-4 bg-white/5 rounded-lg border border-white/5">
              <h4 className="text-[#FFB347] font-bold flex items-center gap-2 text-sm uppercase tracking-widest font-mono">
                <Cpu size={16} /> The Hard Problem Solved
              </h4>
              <p className="text-sm">
                The project stalled when SMTP handshakes proved unreliable for account activation. Token-based expiration introduced edge cases that broke user flow. I <span className="text-white">debugged the authentication pipeline end-to-end</span>, resolved the SMTP integration issues, and implemented a robust token verification mechanism that ensured 100% reliability for verified faculty access.
              </p>
            </div>

            {/* Outcome */}
            <div className="space-y-2">
              <h4 className="text-white font-bold flex items-center gap-2 text-sm uppercase tracking-widest font-mono">
                <CheckCircle size={16} className="text-green-400" /> Outcome
              </h4>
              <p className="text-sm">
                Delivered two critical production-grade modules—the core applicant-to-chair workflow and the authentication system—within an aggressive <span className="text-white">one-month timeline</span>, providing the institutional foundation required to meet strict academic deadlines.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-10">
            {exp.tags.map(tag => (
              <span key={tag} className="text-[10px] font-mono px-3 py-1 bg-[#00F5FF]/5 text-[#00F5FF]/80 border border-[#00F5FF]/20 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const stats = [
    { label: "Current GPA", value: "8.5" },
    { label: "Internships", value: "1" },
    { label: "Core Projects", value: "5+" },
    { label: "Hardware Stack", value: "PLC/IoT" }
  ];

  return (
    <section id="about" ref={ref} className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5 overflow-hidden">
      <div className="flex flex-col lg:grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Visual & Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          // Only sticky on laptop (lg). On mobile, it just stays at the top.
          className="lg:sticky lg:top-32 w-full z-10"
        >
          <div className="relative group mb-8 lg:mb-12 flex justify-center lg:justify-start">
            {/* Hide the giant SDK text on mobile to avoid overlap */}
            <div className="hidden lg:block text-[180px] font-bold leading-none text-[#00F5FF]/5 select-none font-mono">
              SDK
            </div>
            
            {/* Centered Avatar Box for mobile, Absolute for laptop */}
            <div className="relative lg:absolute lg:inset-0 flex items-center justify-center lg:justify-start">
               <div className="w-40 h-40 lg:w-48 lg:h-48 border border-[#00F5FF]/20 rounded-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500 flex items-center justify-center bg-[#0A0A0F]/80 backdrop-blur-sm">
                  <div className="text-[#00F5FF] font-mono text-5xl font-bold opacity-60 group-hover:opacity-100 transition-opacity">
                    S
                  </div>
               </div>
            </div>
          </div>

          {/* Stats Grid - Smaller gaps on mobile */}
          <div className="grid grid-cols-2 gap-3 md:gap-4 max-w-sm mx-auto lg:mx-0">
            {stats.map((stat, i) => (
              <div key={i} className="glass-card p-4 rounded-lg border-l-2 border-l-[#00F5FF]/30">
                <div className="text-xl font-bold text-[#00F5FF] font-mono">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Narrative Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-0 mt-8 lg:mt-0"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 lg:mb-10 flex items-center gap-4 font-mono">
            <span className="text-[#00F5FF] text-xl lg:text-2xl">01.</span> About Me
          </h2>
          
          <div className="space-y-6 text-gray-400 text-base lg:text-lg leading-relaxed font-sans">
            <p>
              <span className="text-white font-semibold">Sanjit Dinesh Krishnan</span> is a Computer Science undergraduate at 
              <span className="text-[#FFB347]"> R.V University, Bangalore</span>, specializing in AI/ML and Robotics. 
              His academic trajectory reflects a purposeful progression from physical systems to artificial intelligence.
            </p>

            <p>
              Grounded in hands-on hardware experience — from wiring Arduino sensors for IoT systems to programming 
              <span className="text-white font-semibold"> PLC ladder logic</span> for industrial automation — he built an intuitive 
              understanding of how machines perceive and interact with the real world.
            </p>

            <p>
              The answer emerged through his intensive work in deep learning and computer vision, where he built a 
              <span className="text-white font-semibold"> CNN-based document forgery detection system</span> using transfer learning 
              with ResNet-18, independently designing the complete ML pipeline. Simultaneously, he explored robot kinematics by implementing 
              <span className="text-white font-semibold"> differential drive simulations</span> in Python.
            </p>

            <p>
              His internship at the <span className="text-white font-semibold">Indian Institute of Astrophysics</span> tested these 
              converging skills under real institutional pressure. Tasked with building a complex multi-role web 
              platform within a single month, he delivered a production-grade system featuring real-time auto-save and PostgreSQL-backed workflows.
            </p>

            <div className="pt-6 border-t border-white/5">
              <p className="text-[#00F5FF] font-mono text-sm lg:text-base">
                &gt; Currently seeking a student internship to deepen expertise at the intersection of AI, 
                machine learning, and robotics.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const stats = [
    { label: "Current GPA", value: "8.5" },
    { label: "Internships", value: "1" },
    { label: "Core Projects", value: "5+" },
    { label: "Hardware Stack", value: "PLC/IoT" }
  ];

  return (
    <section id="about" ref={ref} className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
        
        {/* Left Column: Visual & Stats */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="sticky top-32"
        >
          <div className="relative group mb-12">
            <div className="text-[180px] font-bold leading-none text-[#00F5FF]/5 select-none font-mono">
              SDK
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-48 h-48 border border-[#00F5FF]/20 rounded-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500 flex items-center justify-center bg-[#0A0A0F]">
                  <div className="text-[#00F5FF] font-mono text-5xl font-bold opacity-40 group-hover:opacity-100 transition-opacity">
                    S
                  </div>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
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
        >
          <h2 className="text-4xl font-bold mb-10 flex items-center gap-4 font-mono">
            <span className="text-[#00F5FF] text-2xl">01.</span> About Me
          </h2>
          
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-sans">
            <p>
              <span className="text-white font-semibold">Sanjit Dinesh Krishnan</span> is a Computer Science undergraduate at 
              <span className="text-[#FFB347]"> R.V University, Bangalore</span>, specializing in AI/ML and Robotics. 
              His academic trajectory reflects a purposeful progression from physical systems to artificial intelligence.
            </p>

            <p>
              Grounded in hands-on hardware experience — from wiring Arduino sensors for IoT systems to programming 
              <span className="text-white"> PLC ladder logic</span> for industrial automation — he built an intuitive 
              understanding of how machines perceive and interact with the real world. This strong foundation in 
              embedded systems naturally led him to pursue a deeper question: 
              <span className="italic text-[#00F5FF]"> how can these machines learn to think?</span>
            </p>

            <p>
              The answer emerged through his intensive work in deep learning and computer vision, where he built a 
              <span className="text-white"> CNN-based document forgery detection system</span> using transfer learning 
              with ResNet-18, independently designing the complete ML pipeline from synthetic dataset generation 
              to model evaluation. Simultaneously, he explored robot kinematics by implementing 
              <span className="text-white"> differential drive simulations</span> in Python, bridging the gap between 
              software intelligence and physical motion.
            </p>

            <p>
              His internship at the <span className="text-white">Indian Institute of Astrophysics</span> tested these 
              converging skills under real institutional pressure. Tasked with building a complex multi-role web 
              platform within a single month, he delivered a production-grade system featuring real-time auto-save, 
              PostgreSQL-backed workflows, and a robust authentication architecture — demonstrating his ability 
              to ship reliable software when the stakes are high.
            </p>

            <div className="pt-6 border-t border-white/5">
              <p className="text-[#00F5FF] font-mono text-base">
                &gt; Currently seeking a student internship to deepen expertise at the intersection of AI, 
                machine learning, and robotics — contributing to teams building technology that 
                senses, reasons, and acts.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
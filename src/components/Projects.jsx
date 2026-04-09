import { motion } from 'framer-motion';
import { ExternalLink, Cpu, Database, Bot, ShieldCheck, Code2 } from "lucide-react";

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const projects = [
  {
    title: "Fake ID Identification System",
    subtitle: "3rd Semester College Project",
    category: "AI and Computer Vision",
    icon: <ShieldCheck className="text-[#00F5FF]" />,
    desc: "Built a CNN-based document forgery detection system using transfer learning with ResNet-18. Independently managed the full ML pipeline: synthetic dataset generation with controlled forgeries, fine-tuning with data augmentation, and training with Adam optimizer.",
    tech: ["Python", "PyTorch", "ResNet-18", "Computer Vision"],
    link: "https://github.com/sanjdk"
  },
  {
    title: "IoT-based Smart Car Parking System",
    subtitle: "3rd Semester College Project",
    category: "IoT and Embedded Systems",
    icon: <Cpu className="text-[#FFB347]" />,
    desc: "Developed a real-time embedded system to monitor parking availability. Led hardware setup and system integration, including circuit design, sensor connections, and microcontroller interfacing with Arduino Uno and ESP32.",
    tech: ["Arduino", "ESP32", "Embedded C++", "Circuit Design"],
    link: "https://github.com/sanjdk"
  },
  {
    title: "Differential Drive Robot Simulation",
    subtitle: "Robotics Coursework",
    category: "Robotics",
    icon: <Bot className="text-[#00F5FF]" />,
    desc: "Implemented a simulation utilizing Python and Pygame, applying both forward and inverse kinematics to achieve autonomous motion. Bridged theoretical robotics with practical software execution to translate motor commands into coordinated movement.",
    tech: ["Python", "Pygame", "Kinematics", "NumPy"],
    link: "https://github.com/sanjdk"
  },
  {
    title: "Car Rental Management System",
    subtitle: "2nd Semester College Project",
    category: "Full-Stack Development",
    icon: <Code2 className="text-[#FFB347]" />,
    desc: "Built an end-to-end system with user authentication, listings, and full CRUD operations. Developed the complete frontend, backend, and relational database from scratch, gaining foundational experience in system architecture.",
    tech: ["PHP", "MySQL", "HTML5/CSS3", "Backend Dev"],
    link: "https://github.com/sanjdk"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <h2 className="text-4xl font-bold mb-16 flex items-center gap-4 font-mono">
        <span className="text-[#00F5FF]">03.</span> Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 rounded-xl group flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-[#00F5FF]/30 transition-colors">
                {project.icon}
              </div>
              <a href={project.link} className="text-gray-500 hover:text-[#00F5FF] transition-colors">
                <GitHubIcon />
              </a>
            </div>
            
            <div className="mb-4">
              <p className="text-[#00F5FF] font-mono text-[10px] uppercase tracking-[0.2em] mb-1">
                {project.category}
              </p>
              <h3 className="text-xl font-bold text-white group-hover:text-glow transition-all">
                {project.title}
              </h3>
              <p className="text-gray-500 text-xs font-mono italic">{project.subtitle}</p>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
              {project.tech.map(t => (
                <span key={t} className="text-[9px] font-mono px-2 py-1 bg-white/5 text-gray-400 rounded border border-white/5">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
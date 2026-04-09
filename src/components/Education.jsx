import { motion } from 'framer-motion';

const educationData = [
  {
    institution: "R.V. University",
    degree: "B.Tech in Computer Science and Engineering",
    period: "2024 — Present",
    location: "Bangalore, India",
    stats: "GPA Progression: 8.0 → 8.5 → 8.5",
    details: "Focusing on Intelligent Systems, Robotics Kinematics, and Advanced Data Structures."
  },
  {
    institution: "The Amaatra Academy",
    degree: "Senior Secondary (CBSE)",
    period: "Completed 2024",
    location: "Bangalore, India",
    details: "Focused on Physics, Chemistry, and Mathematics."
  },
  {
    institution: "Notre Dame Academy",
    degree: "Secondary School (ICSE)",
    period: "Completed 2022",
    location: "Bangalore, India",
    details: "Foundational technical and scientific education."
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <h2 className="text-4xl font-bold mb-16 flex items-center gap-4">
        <span className="text-[#00F5FF]">06.</span> Education
      </h2>

      <div className="space-y-8">
        {educationData.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative glass-card p-8 rounded-xl overflow-hidden"
          >
            {/* Subtle background glow for the active degree */}
            {i === 0 && (
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00F5FF]/5 blur-3xl -z-10 group-hover:bg-[#00F5FF]/10 transition-all" />
            )}
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#00F5FF] transition-colors">
                  {edu.institution}
                </h3>
                <p className="text-[#FFB347] font-mono text-sm">{edu.degree}</p>
              </div>
              <div className="text-right mt-2 md:mt-0">
                <p className="text-gray-400 font-mono text-xs">{edu.period}</p>
                <p className="text-gray-500 text-xs">{edu.location}</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mb-4">
              {edu.details}
            </p>

            {edu.stats && (
              <div className="inline-block px-4 py-1 rounded-full bg-[#00F5FF]/10 border border-[#00F5FF]/20 text-[#00F5FF] text-xs font-mono">
                {edu.stats}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
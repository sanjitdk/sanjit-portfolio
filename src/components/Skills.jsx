import { motion } from 'framer-motion';

const aimlBoxes = [
  {
    title: "ML Foundations",
    subtitle: "Linear Regression · Pandas · Overfitting",
    category: "Building Basic Models"
  },
  {
    title: "Supervised & Unsupervised",
    subtitle: "Logistic Regression · KMeans",
    category: "Core Algorithms"
  },
  {
    title: "Neural Networks & DL",
    subtitle: "Keras · Transfer Learning",
    category: "Deep Learning Architectures"
  },
  {
    title: "Vision & NLP",
    subtitle: "OpenCV · CNN · GPT-2 ",
    category: "Computer Vision & NLP"
  },
  {
    title: "LLM Engineering",
    subtitle: "OpenAI API · LangChain · RAG",
    category: "Prompt Eng & Vector DBs"
  },
  {
    title: "Agentic AI",
    subtitle: "Gemini · GPT-4V ",
    category: "Agents & Multimodal Models"
  }
];

const secondaryCategories = [
  { name: "Programming", skills: ["Python", "Java", "C/C++", "SQL"] },
  { name: "Robotics & IoT", skills: ["Arduino", "ESP32", "PLC Ladder Logic", "Kinematics"] },
  { name: "Web & Systems", skills: ["React", "PostgreSQL", "Supabase", "Tailwind CSS", "PHP"] }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <h2 className="text-4xl font-bold mb-16 font-mono">
        <span className="text-[#00F5FF]">04.</span> Technical Arsenal
      </h2>

      {/* AI/ML SPECIALIZATION GRID - 6 COMPACT BOXES */}
      <div className="mb-20">
        <h3 className="font-mono text-[#FFB347] text-xs uppercase tracking-[0.4em] font-bold mb-8">
          AI/ML Specialization
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {aimlBoxes.map((box, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card p-5 rounded-lg border-l-2 border-l-[#00F5FF]/50 group hover:bg-[#00F5FF]/5 transition-all cursor-default"
            >
              <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wider mb-1">
                {box.category}
              </p>
              <h4 className="text-white font-bold text-base mb-2 group-hover:text-[#00F5FF] transition-colors">
                {box.title}
              </h4>
              <p className="text-[#FFB347]/90 font-mono text-[11px] leading-relaxed">
                {box.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SECONDARY COMPETENCIES - COMPACT PILLS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8 border-t border-white/5">
        {secondaryCategories.map((cat, i) => (
          <div key={i}>
            <h3 className="font-mono text-[#FFB347] text-xs uppercase tracking-[0.4em] font-bold mb-6">
              {cat.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1.5 bg-white/5 border border-white/10 rounded text-gray-400 font-mono text-[11px] hover:text-white hover:border-[#00F5FF]/40 transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
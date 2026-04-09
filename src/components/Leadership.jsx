import { motion } from 'framer-motion';
import { Trophy, Star, Shield } from 'lucide-react';

export default function Leadership() {
  const achievements = [
    {
      title: "Athletics & Sports Leadership",
      icon: <Trophy className="text-[#FFB347]" />,
      desc: "As Sports Captain at Notre Dame Academy, led teams across inter-school tournaments while competing at the district level and Indian League (Under-14) in football, earning Best Player awards in multiple open tournaments."
    },
    {
      title: "Institutional Leadership",
      icon: <Shield className="text-[#00F5FF]" />,
      desc: "Represented both Notre Dame Academy and Amaatra Academy as School Captain, acting as the primary student liaison and lead organizer for various high-stakes inter-school competitions."
    },
    {
      title: "Creative Versatility",
      icon: <Star className="text-[#FFB347]" />,
      desc: "Represented Notre Dame Academy in multiple inter-school singing competitions, winning awards that reflect creative versatility and discipline alongside technical engineering pursuits."
    }
  ];

  return (
    <section id="leadership" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <h2 className="text-4xl font-bold mb-16 flex items-center gap-4 font-mono">
        <span className="text-[#00F5FF]">05.</span> Leadership & Achievements
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {achievements.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-xl border-t-2 border-t-transparent hover:border-t-[#00F5FF] transition-all duration-500"
          >
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6">
              {item.icon}
            </div>
            <h3 className="text-lg font-bold text-white mb-4 font-mono uppercase tracking-tight">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
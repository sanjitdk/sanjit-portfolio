import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="relative bg-[#0A0A0F] text-white min-h-screen">
      <CustomCursor />
      // <ParticleBackground />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Leadership /> 
        
        <section id="education" className="py-24 px-6 max-w-7xl mx-auto">
             <h2 className="text-4xl font-bold mb-16 flex items-center gap-4 font-mono">
                <span className="text-[#00F5FF]">06.</span> Education
            </h2>
            <div className="space-y-6">
                <div className="glass-card p-8 rounded-xl border-l-4 border-l-[#00F5FF]">
                    <h3 className="text-xl font-bold">B.Tech in Computer Science</h3>
                    <p className="text-[#00F5FF] font-mono">R.V. University</p>
                    <p className="text-gray-400 text-sm mt-1 font-mono">2024 — Present | CGPA: 8.5</p>
                </div>
                <div className="glass-card p-8 rounded-xl opacity-60">
                    <h3 className="text-xl font-bold">Higher Secondary (CBSE)</h3>
                    <p className="text-gray-300">The Amaatra Academy</p>
                    <p className="text-gray-400 text-sm mt-1">Completed 2024</p>
                </div>
            </div>
        </section>

        <Contact />
      </main>

      <footer className="py-12 text-center text-gray-500 font-mono text-xs border-t border-[#00F5FF]/5">
        <p>Built with React, Three.js & Tailwind</p>
        <p className="mt-2 text-[#00F5FF]">Sanjit Dinesh Krishnan © 2025</p>
      </footer>
    </div>
  );
}

export default App;
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import FloatingNav from "@/components/FloatingNav";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#0A192F] min-h-screen scroll-smooth relative"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        </div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto">
          <Hero />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-20">
            <div id="experience" className="scroll-mt-20">
              <Experience />
            </div>
            <Education />
            <Projects />
            <Skills />
            <Contact />
          </div>
          <FloatingNav />
        </div>
      </div>
    </motion.div>
  );
};

export default Index;
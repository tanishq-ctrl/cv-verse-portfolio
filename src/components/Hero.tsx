import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const { scrollY } = useScroll();
  
  // Refined parallax and fade effects with smoother transitions
  const y = useTransform(scrollY, [0, 500], [0, 150], { clamp: false });
  const opacity = useTransform(scrollY, [0, 300], [1, 0], { clamp: false });
  const scale = useTransform(scrollY, [0, 500], [1, 0.9], { clamp: false });

  const handleViewWork = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/tanishq-ctrl", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/tanishq-prabhu-b71467166/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:tanishqprabhu20@gmail.com", label: "Email" }
  ];

  // Smoother text reveal animation variants
  const textReveal = {
    hidden: { 
      opacity: 0, 
      y: 30,
      filter: "blur(10px)"
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        delay: i * 0.2,
        ease: [0.25, 0.1, 0, 1]
      }
    })
  };

  // Background animation variants
  const backgroundVariants = {
    animate: {
      scale: [1, 1.1, 1],
      rotate: [0, 180, 360],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop"
      }
    }
  };

  return (
    <AnimatePresence>
      <div className="min-h-screen flex flex-col justify-center bg-[#0A192F] relative overflow-hidden perspective-1000">
        {/* Refined background animations */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-[160px]"
          variants={backgroundVariants}
          animate="animate"
          style={{ 
            y, 
            scale,
            transformOrigin: "center center",
          }}
        />
        <motion.div
          className="absolute -bottom-1/4 -left-1/4 w-[1000px] h-[1000px] bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-full blur-[160px]"
          variants={backgroundVariants}
          animate="animate"
          style={{ 
            y: useTransform(scrollY, [0, 500], [0, -150]),
            scale,
            transformOrigin: "center center",
          }}
        />

        <motion.div 
          className="container mx-auto px-4 z-10"
          style={{ opacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-left max-w-4xl mx-auto"
            style={{ y }}
          >
            {/* Enhanced text animations */}
            <motion.p 
              className="text-neon-blue mb-4 font-mono tracking-wider"
              variants={textReveal}
              custom={0}
              initial="hidden"
              animate="visible"
            >
              Hi, my name is
            </motion.p>
            
            <motion.div
              className="overflow-hidden"
              variants={textReveal}
              custom={1}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 
                className="text-6xl sm:text-7xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                Tanishq Prabhu
              </motion.h1>
            </motion.div>
            
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold text-gray-400 mb-6"
              variants={textReveal}
              custom={2}
              initial="hidden"
              animate="visible"
            >
              Data Scientist & Analyst
            </motion.h2>
            
            <motion.div
              className="mb-12 space-y-6"
              variants={textReveal}
              custom={3}
              initial="hidden"
              animate="visible"
            >
              <p className="text-xl text-gray-300 max-w-2xl mb-8">
                Results-driven Data Analyst & Data Scientist with expertise in risk management, 
                internal audit analytics, and financial crime detection.
              </p>
              <p className="text-xl text-gray-300 max-w-2xl">
                Proficient in Python, SQL, Tableau, Power BI, Alteryx, and Excel (VBA).
                Strong background in data-driven auditing, machine learning, and statistical modeling.
              </p>
            </motion.div>
            
            {/* Enhanced button animation */}
            <motion.button
              onClick={handleViewWork}
              className="group px-8 py-3 bg-transparent border-2 border-neon-blue text-neon-blue 
                       rounded-full transition-all duration-300 hover:bg-neon-blue/10 hover:text-white 
                       transform hover:shadow-lg hover:shadow-neon-blue/20 
                       flex items-center gap-2 backdrop-blur-sm mb-12"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              whileTap={{ 
                scale: 0.98,
                transition: { duration: 0.1, ease: "easeIn" }
              }}
            >
              View My Work
              <motion.div
                animate={{ 
                  y: [0, 5, 0],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <ArrowDown className="w-5 h-5" />
              </motion.div>
            </motion.button>

            {/* Enhanced social icons animation */}
            <div className="flex gap-4 mt-12">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 5,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 1 + index * 0.1,
                    type: "spring",
                    stiffness: 100,
                    damping: 10
                  }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          style={{ opacity }}
          animate={{ 
            y: [0, 10, 0],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <motion.div 
            className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center relative"
            whileHover={{ 
              scale: 1.1,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div 
              className="w-2 h-2 bg-neon-blue rounded-full mt-2"
              animate={{ 
                y: [0, 16, 0],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />
            <motion.div 
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-neon-blue text-sm"
              animate={{ 
                opacity: [0.5, 1, 0.5],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              Scroll
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Hero;
import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Education = () => {
  const { scrollY } = useScroll();

  // Parallax and fade effects for the section
  const sectionY = useTransform(scrollY, [0, 1000], [0, -150]);
  const sectionOpacity = useTransform(scrollY, [100, 300], [0, 1]);

  const education = [
    {
      degree: "Masters of Science in Data Science",
      school: "Vellore Institute of Technology",
      duration: "2025 - 2027",
    },
    {
      degree: "Bachelors of Science in Economics & Analytics",
      school: "Christ University",
      duration: "2021 - 2024",
      grade: "GPA: 3.1/4"
    }
  ];

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0, 1]
      }
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="education" className="py-12 relative overflow-hidden">
      {/* Background gradient effects */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0A192F] via-[#112240] to-[#0A192F] opacity-50"
        style={{ y: useTransform(scrollY, [0, 1000], [0, 300]) }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="flex items-center gap-2 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <GraduationCap className="text-neon-purple w-8 h-8" />
          </motion.div>
          <h2 className="text-5xl font-bold text-white bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Education
          </h2>
        </motion.div>

        <motion.div
          className="grid gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              custom={index}
            >
              <Card className="bg-[#112240]/50 backdrop-blur-sm border-neon-purple/20 hover:border-neon-purple/40 transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    {edu.degree}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-xl text-neon-cyan font-semibold">
                      {edu.school}
                    </h3>
                    <p className="text-gray-400 font-mono">
                      {edu.duration}
                    </p>
                  </motion.div>

                  {edu.grade && (
                    <motion.p 
                      className="text-gray-300 leading-relaxed font-mono"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {edu.grade}
                    </motion.p>
                  )}

                  {/* Decorative line */}
                  <motion.div
                    className="h-0.5 w-full bg-gradient-to-r from-neon-cyan/0 via-neon-cyan/30 to-neon-cyan/0"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative floating elements */}
        <motion.div
          className="absolute -right-20 top-20 w-40 h-40 rounded-full bg-neon-cyan/5 blur-3xl"
          animate={{
            y: [-20, 20, -20],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -left-20 bottom-20 w-60 h-60 rounded-full bg-neon-cyan/5 blur-3xl"
          animate={{
            y: [20, -20, 20],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
};

export default Education;
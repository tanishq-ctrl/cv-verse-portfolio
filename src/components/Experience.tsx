import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Experience = () => {
  const { scrollY } = useScroll();

  // Parallax and fade effects for the section
  const sectionY = useTransform(scrollY, [0, 1000], [0, -150]);
  const sectionOpacity = useTransform(scrollY, [100, 300], [0, 1]);

  const experiences = [
    {
      title: "Data Intelligence Associate",
      company: "Edu Dubai",
      duration: "April 2024 - Present",
      description: "Developed and optimized data pipelines, increasing compliance monitoring efficiency by 35%. Built interactive business intelligence dashboards, improving fraud detection by 25%. Automated ETL workflows using Alteryx and SQL to enhance data processing efficiency. Applied machine learning algorithms to refine predictive modeling for financial insights. Created visualizations in Power BI and Tableau for key business stakeholders."
    },
    {
      title: "Research Intern ",
      company: "Gokhale Institute of Politics and Economics, India",
      duration: "Feb 2024 - April 2024",
      description: "Research Topic: Exploring Sleep Patterns in Urban Indian Populations: A Comparative Study of Mumbai and Pune. Conducted quantitative research on urban sleep patterns for 7,300+ individuals. Automated data preparation processes, reducing manual effort by 40%. Analyzed demographic influences on sleep duration, driving policy discussions. Presented research findings at CERE 2024 (IIM Indore) to an audience of 200+ global researchers."
    },
    {
      title: "Data Analyst summer Intern ",
      company: "IDBI Bank, India ",
      duration: "July 2023 - Sept 2023",
      description: "Conducted financial analysis on 20 NSE-listed healthcare firms, optimizing portfolios by 25%.Automated reporting for nine financial metrics, reducing reporting time by 50%.Developed interactive Tableau dashboards to visualize key performance trends."
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

  return (
    <section id="experience" className="py-12 relative overflow-hidden">
      {/* Background gradient effects */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0A192F] via-[#112240] to-[#0A192F] opacity-50"
        style={{ y: useTransform(scrollY, [0, 1000], [0, 300]) }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Title section without animations */}
        <div className="flex items-center gap-2 mb-12">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Briefcase className="text-neon-purple w-8 h-8" />
          </motion.div>
          <h2 className="text-5xl font-bold text-white bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Experience
          </h2>
        </div>

        {/* Rest of the content with animations */}
        <motion.div
          className="grid gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              custom={index}
            >
              <Card className="bg-[#112240]/50 backdrop-blur-sm border-neon-purple/20 hover:border-neon-purple/40 transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    {exp.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-2xl text-neon-purple font-semibold">
                      {exp.company}
                    </h3>
                    <p className="text-lg text-gray-400 font-mono">
                      {exp.duration}
                    </p>
                  </motion.div>

                  <motion.p 
                    className="text-gray-300 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {exp.description}
                  </motion.p>

                  {/* Decorative line */}
                  <motion.div
                    className="h-0.5 w-full bg-gradient-to-r from-neon-purple/0 via-neon-purple/30 to-neon-purple/0"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
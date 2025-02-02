import { motion, useScroll, useTransform } from "framer-motion";
import { Terminal, Award } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const Skills = () => {
  const { scrollY } = useScroll();

  // Parallax and fade effects for the section
  const sectionY = useTransform(scrollY, [0, 1000], [0, -150]);
  const sectionOpacity = useTransform(scrollY, [100, 300], [0, 1]);

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

  const skills = {
    "Programming & Data Processing": ["Python", "SQL", "R", "SAS", "VBA", "Alteryx"],
    "Risk Analytics & Internal Audit": ["Power BI", "Tableau", "Alteryx", "SAS Visual Analytics"],
    "Machine Learning & AI": ["NLP", "Anomaly Detection", "Predictive Modeling", "Risk Scoring"],
    "Financial Data Analysis": ["Time Series Analysis", "Statistical Risk Modeling"],
    "ETL & Data Transformation": ["Alteryx", "SQL-based ETL", "Data Cleansing"],
    "Big Data & Cloud Computing": ["Hadoop", "Spark", "Azure Data Engineering"],
    "Advanced Excel": ["VBA", "Automation", "Audit Processes", "Reporting"]
  };

  const certifications = {
    "AML & Cybersecurity": [
      "UNODC AML CFT Certification",
      "ISC2 Cybersecurity Certified"
    ],
    "Data Engineering & Analytics": [
      "Microsoft Certified Azure Data Engineer",
      "SAS Generative AI Specialist",
      "Advanced Statistics for Data Science (IIT Madras)"
    ],
    "Google Certifications": [
      "Project Management",
      "Data Analytics",
      "Digital Marketing",
      "IT Automation with Python"
    ],
    "Econometrics & Business Tools": [
      "R and Python Applications",
      "Statistical Linear Models for Data Science"
    ]
  };

  // Add titleVariants
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
    <section id="skills" className="py-12 relative overflow-hidden">
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
            <Terminal className="text-neon-magenta w-8 h-8" />
          </motion.div>
          <h2 className="text-5xl font-bold text-white bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="grid gap-8 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              custom={index}
            >
              <Card className="bg-[#112240]/50 backdrop-blur-sm border-neon-magenta/20 hover:border-neon-magenta/40 transition-colors duration-300">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-white mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: skillIndex * 0.1 }}
                        className="px-3 py-1 rounded-full bg-neon-magenta/10 text-neon-magenta border border-neon-magenta/20"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          variants={containerVariants}
          className="mt-20"
        >
          {/* Certifications Title */}
          <motion.div 
            className="flex items-center gap-2 mb-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Award className="text-neon-magenta w-8 h-8" />
            </motion.div>
            <h2 className="text-4xl font-bold text-white bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              Certifications
            </h2>
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {Object.entries(certifications).map(([category, certList], index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                custom={index}
              >
                <Card className="bg-[#112240]/50 backdrop-blur-sm border-neon-magenta/20 hover:border-neon-magenta/40 transition-colors duration-300 h-full">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold text-white mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                      {category}
                    </h3>
                    <div className="flex flex-col gap-3">
                      {certList.map((cert, certIndex) => (
                        <motion.div
                          key={certIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: certIndex * 0.1 }}
                          className="group relative"
                        >
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-magenta to-neon-purple opacity-0 group-hover:opacity-30 rounded-lg blur transition duration-300" />
                          <div className="relative px-4 py-3 rounded-lg bg-[#112240]/80 text-neon-magenta border border-neon-magenta/20 group-hover:border-neon-magenta/40 transition-all duration-300">
                            {cert}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Decorative floating elements */}
        <motion.div
          className="absolute -right-20 top-20 w-40 h-40 rounded-full bg-neon-magenta/5 blur-3xl"
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

export default Skills;
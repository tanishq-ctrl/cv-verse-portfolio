import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Github, Code2, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "SympCheck Helper",
    description: "SympCheck Helper is a modern healthcare consultation chatbot that leverages the power of DeepSeek V3 API and Supabase to provide intelligent health-related assistance. Built with cutting-edge technologies, it offers a seamless and intuitive experience for users seeking health information and support.",
    videoUrl: "https://drive.google.com/file/d/16V0Zla7eLie9m510BRSux6q4dmY44U4x/view?usp=sharing",
    githubUrl: "https://github.com/tanishq-ctrl/sympcheck-helper",
    tags: ["React", "TypeScript", "Node.js", "SQL", "Chatbot", "DeepSeek V3", "Supabase"]
  },
  {
    title: "Corporate Stress Analysis Dashboard",
    description: "Developed an interactive dashboard to analyze employee stress levels, workplace dynamics, and organizational trends. Features include real-time monitoring, department-wise comparisons, gender equality insights, and comprehensive statistical analysis.",
    videoUrl: "https://drive.google.com/file/d/15Hzm0qKolv-_xAVQvZ8kVcUcUAhoPo1u/view?usp=sharing",
    githubUrl: "https://github.com/tanishq-ctrl/corporate-stress-analysis",
    tags: ["Python", "Data Analysis", "Dashboard", "Statistics", "Power BI"]
  },
  {
    title: "AI Waste Classification System",
    description: "Created a deep learning-based web application that classifies different types of waste materials using computer vision, assisting in waste segregation across categories such as cardboard, glass, metal, paper, plastic, and trash.",
    videoUrl: "https://drive.google.com/file/d/1C7EJvTlvDZtHQgwOzRRchCsencBRObOj/view?usp=sharing",
    githubUrl: "https://github.com/tanishq-ctrl/waste-classification",
    tags: ["Python", "Deep Learning", "Computer Vision", "TensorFlow", "Flask"]
  },
  {
    title: "Quickie Delivery App",
    description: "Built a SwiftUI-based hyperlocal delivery application featuring real-time order tracking, smart scheduling, multiple delivery options, and a gamification system with rewards. Includes dynamic pricing, social features, and sustainability tracking.",
    videoUrl: "https://drive.google.com/file/d/17DLNkfJOqyWYZi_aG3wN8lxEsC-O4YL9/view?usp=sharing",
    githubUrl: "https://github.com/tanishq-ctrl/quickie-delivery-app",
    tags: ["Swift", "SwiftUI", "iOS", "Firebase", "MapKit"]
  },
  {
    title: "Finance for Teens",
    description: "Designed an educational app to teach teenagers financial literacy through interactive lessons, quizzes, and budgeting exercises. Features include investment insights, goal setting, secure authentication, and progress tracking.",
    videoUrl: "https://drive.google.com/file/d/1sx9TS1TgnGTYcFrmALb7TWECnjl_7Qcm/view?usp=sharing",
    githubUrl: "https://github.com/tanishq-ctrl/Finance-for-teens",
    tags: ["React Native", "Firebase", "TypeScript", "Educational Tech"]
  },
  {
    title: "House Price Prediction",
    description: "Built predictive models and dashboards for real-time insights into real estate trends. Implemented machine learning algorithms to forecast property values based on multiple features.",
    videoUrl: "https://drive.google.com/file/d/1iciTQFARymCW_sBTq8zwqUgYSygDOybz/view?usp=sharing",
    githubUrl: "your-github-url-here",
    tags: ["Python", "Machine Learning", "Scikit-learn", "Regression", "Data Visualization"]
  },
  {
    title: "Walmart Sales Insights Analysis",
    description: "Conducted exploratory data analysis and created interactive dashboards for strategic decision-making. Utilized advanced analytics to uncover sales patterns and customer behavior trends.",
    githubUrl: "https://github.com/tanishq-ctrl/Walmart-Analysis",
    tags: ["Python", "Pandas", "Tableau", "Data Analysis", "Business Intelligence"]
  },
  {
    title: "Consumer Personality Analysis",
    description: "Analyzed spending patterns to optimize marketing strategies and product targeting. Developed clustering models to identify customer segments and behavior patterns.",
    githubUrl: "https://github.com/tanishq-ctrl/Consumer-Personality-Analysis",
    tags: ["Python", "Clustering", "Marketing Analytics", "Data Mining"]
  },
  {
    title: "Cyberattack Analysis",
    description: "Identified vulnerabilities and recommended measures to strengthen cybersecurity frameworks. Developed analysis tools to detect patterns in security breaches and potential threats.",
    githubUrl: "https://github.com/tanishq-ctrl/Cyberattack-Analysis-and-Insights",
    tags: ["Python", "Security", "Network Analysis", "Data Visualization"]
  },
  {
    title: "UAE Stock Price Prediction",
    description: "Developed machine learning models to forecast stock prices and assist investors. Implemented time series analysis and deep learning techniques for accurate price predictions.",
    githubUrl: "your-github-url-here",
    tags: ["Python", "Machine Learning", "Time Series", "Financial Analysis", "Deep Learning"]
  }
];

const getGoogleDriveEmbedUrl = (url: string) => {
  if (!url) return null;
  const fileId = url.match(/\/d\/([^/]+)/)?.[1];
  return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : url;
};

interface ProjectCardProps {
  project: (typeof projects)[0];
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="glass hover:translate-y-[-5px] transition-all duration-300 h-full flex flex-col group">
      <CardHeader className="flex-none">
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
          {project.title}
        </CardTitle>
        <div className="relative">
          <CardDescription 
            className={`text-lg text-gray-400 ${!isExpanded ? 'line-clamp-3' : ''}`}
          >
            {project.description}
          </CardDescription>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center gap-1 mt-2"
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Show More <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </CardHeader>
      <CardContent className="flex-1 space-y-4">
        {project.videoUrl && (
          <motion.div
            className="aspect-video rounded-lg overflow-hidden bg-black/50"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <iframe
              src={getGoogleDriveEmbedUrl(project.videoUrl)}
              className="w-full h-full"
              allow="autoplay"
              allowFullScreen
            />
          </motion.div>
        )}

        <motion.div 
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-2 py-1 text-sm rounded-full bg-neon-purple/10 text-neon-purple border border-neon-purple/20"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </CardContent>
      <CardFooter className="flex-none pt-4">
        <Button
          variant="outline"
          className="w-full flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
          onClick={() => window.open(project.githubUrl, '_blank')}
        >
          <Github className="w-4 h-4" />
          View on GitHub
        </Button>
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
  const { scrollY } = useScroll();

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
    <section id="projects" className="py-12 relative overflow-hidden">
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
            <Code2 className="text-neon-purple w-8 h-8" />
          </motion.div>
          <h2 className="text-5xl font-bold text-white bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Projects
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              custom={index}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative floating elements */}
        <motion.div
          className="absolute -right-20 top-20 w-40 h-40 rounded-full bg-neon-purple/5 blur-3xl"
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
          className="absolute -left-20 bottom-20 w-60 h-60 rounded-full bg-neon-purple/5 blur-3xl"
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

export default Projects;
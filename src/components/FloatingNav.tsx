import { motion } from "framer-motion";
import { Home, Briefcase, GraduationCap, Code, Terminal, Mail } from "lucide-react";

const FloatingNav = () => {
  const navItems = [
    { icon: Home, href: "#", label: "Home" },
    { icon: Briefcase, href: "#experience", label: "Experience" },
    { icon: GraduationCap, href: "#education", label: "Education" },
    { icon: Code, href: "#projects", label: "Projects" },
    { icon: Terminal, href: "#skills", label: "Skills" },
    { icon: Mail, href: "#contact", label: "Contact" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block"
    >
      <div className="glass rounded-full py-4 px-2 space-y-6">
        {navItems.map((item, index) => (
          <motion.a
            key={item.label}
            href={item.href}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center group relative"
          >
            <item.icon className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors duration-200" />
            <span className="absolute right-full mr-2 px-2 py-1 rounded glass text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              {item.label}
            </span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default FloatingNav; 
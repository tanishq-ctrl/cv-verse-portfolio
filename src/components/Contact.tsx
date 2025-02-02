import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 mb-8">
          <Mail className="text-neon-blue w-8 h-8" />
          <h2 className="text-4xl font-bold text-white">Contact</h2>
        </div>
        <div className="grid gap-6 max-w-2xl mx-auto">
          <p className="text-lg text-gray-300 text-center">
            Feel free to reach out to me for any opportunities or collaborations!
          </p>
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              className="border-neon-blue hover:bg-neon-blue/20"
              onClick={() => window.location.href = "mailto:tanishqprabhu20@gmail.com"}
            >
              <Mail className="mr-2" />
              Email
            </Button>
            <Button
              variant="outline"
              className="border-neon-purple hover:bg-neon-purple/20"
              onClick={() => window.open("https://github.com/tanishq-ctrl", "_blank")}
            >
              <Github className="mr-2" />
              GitHub
            </Button>
            <Button
              variant="outline"
              className="border-neon-cyan hover:bg-neon-cyan/20"
              onClick={() => window.open("https://www.linkedin.com/in/tanishq-prabhu-b71467166/", "_blank")}
            >
              <Linkedin className="mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
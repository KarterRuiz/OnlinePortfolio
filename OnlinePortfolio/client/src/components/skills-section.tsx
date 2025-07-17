import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Code, 
  BookOpen, 
  Users, 
  TrendingUp, 
  Puzzle, 
  Accessibility, 
  Brain,
  Palette,
  Database,
  Box,
  Layers
} from 'lucide-react';
import { SiHtml5, SiJavascript } from 'react-icons/si';

const SkillsSection = () => {
  const instructionalSkills = [
    { icon: BookOpen, name: "Curriculum Development", color: "text-lavender-custom" },
    { icon: Users, name: "Learning Experience Design", color: "text-lavender-custom" },
    { icon: TrendingUp, name: "Assessment Strategy", color: "text-lavender-custom" },
    { icon: Puzzle, name: "Gamification", color: "text-lavender-custom" },
    { icon: Accessibility, name: "Accessibility Design", color: "text-lavender-custom" },
    { icon: Brain, name: "Cognitive Science", color: "text-lavender-custom" }
  ];

  const techSkills = [
    { icon: SiHtml5, name: "HTML5", color: "text-teal-custom", isReactIcon: true },
    { icon: SiJavascript, name: "JavaScript", color: "text-teal-custom", isReactIcon: true },
    { icon: Palette, name: "Canva", color: "text-teal-custom" },
    { icon: Layers, name: "Rise 360", color: "text-teal-custom" },
    { icon: Box, name: "AR/VR Development", color: "text-teal-custom" },
    { icon: Database, name: "Learning Analytics", color: "text-teal-custom" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="skills" className="py-20 light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-charcoal-custom mb-4">
            Core Skills
          </h2>
          <p className="text-xl text-gray-600">
            Expertise spanning educational theory and cutting-edge technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Instructional Design Skills */}
          <motion.div
            className="bg-gradient-to-br from-lavender-custom to-sky-custom bg-opacity-10 p-8 rounded-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-8">
              <motion.div
                className="lavender-custom w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <GraduationCap className="h-8 w-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-charcoal-custom">Instructional Design Skills</h3>
            </div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {instructionalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <skill.icon className={`h-8 w-8 ${skill.color} mb-2 mx-auto group-hover:scale-110 transition-transform duration-300`} />
                  <p className="text-base font-semibold text-charcoal-custom">{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Tech & Development Skills */}
          <motion.div
            className="bg-gradient-to-br from-teal-custom to-sky-custom bg-opacity-10 p-8 rounded-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-8">
              <motion.div
                className="teal-custom w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: -360 }}
                transition={{ duration: 0.6 }}
              >
                <Code className="h-8 w-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-charcoal-custom">Tech & Development Skills</h3>
            </div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {techSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <skill.icon className={`h-8 w-8 ${skill.color} mb-2 mx-auto group-hover:scale-110 transition-transform duration-300`} />
                  <p className="text-base font-semibold text-charcoal-custom">{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

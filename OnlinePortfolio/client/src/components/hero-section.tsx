import { motion } from 'framer-motion';
import { ArrowDown, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';

const HeroSection = () => {
  const { scrollToSection } = useSmoothScroll();

  return (
    <section id="home" className="gradient-hero py-20 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Bringing Joyful Learning to Life
            <br />
            <motion.span
              className="text-blue-600 drop-shadow-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Through Design & Innovation
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-black font-medium mb-8 drop-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Active minds | Purposeful design | Lasting impact
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              onClick={() => scrollToSection('projects')}
              className="bg-white text-charcoal-custom px-8 py-3 rounded-full font-medium transition-all duration-300 hover:bg-blue-600"
              size="lg"
            >
              <Play className="mr-2 h-4 w-4" />
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="bg-white text-charcoal-custom px-8 py-3 rounded-full font-medium transition-all duration-300 hover:bg-blue-600"
              size="lg"
            >Get In Touch
            </Button>
          </motion.div>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-gold-custom transition-colors duration-300"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown size={32} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

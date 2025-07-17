import { motion } from 'framer-motion';
import { User, Heart, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="/karter-ruiz-headshot.jpeg"
                alt="Karter Ruiz in a white shirt and tie, smiling against a blue background"
                className="rounded-xl shadow-xl object-cover w-full max-w-md" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <User className="h-8 w-8 text-teal-custom mr-3" />
              <h2 className="text-4xl font-bold text-charcoal-custom">About Karter</h2>
            </div>

            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Hi, I’m Karter Ruiz — an educator, curriculum designer, and instructional innovator who’s passionate about making learning meaningful, engaging, and accessible for all students.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Over the past seven years, I’ve taught incredible K–8 students in both the U.S. and Shanghai, China. In every classroom I’ve worked in, I’ve focused on building a sense of curiosity, confidence, and connection — whether through hands-on PBL projects, tech-integrated lessons, or creative ways to bring subjects like storytelling, STEM, and art together.

                I believe great learning happens when students feel invested in what they’re doing and understand why it matters. My teaching and design work is centered around this idea — creating space for learners to explore, express themselves, and grow.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Today, I channel that same energy into designing digital learning experiences and classroom tools that support both students and teachers. I work with platforms like Rise 360, Canva, and Google Workspace to build lessons, activities, and resources that are easy to use and full of purpose. Whether I’m designing a learning game, a unit on murals and history, or a tool for teachers to bring more creativity into their day, my goal is always the same: to help people learn in ways that feel real, fun, and lasting.

                This portfolio is a collection of the work I’ve created — shaped by experience, curiosity, and a love of learning. I hope it gives you a sense of what I care about, how I work, and the kind of learning experiences I aim to create.
<p/>I look forward to connecting with you!
              </motion.p>
            </div>

            {/* My Pedagogy Section */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-coral-custom mr-2" />
                <h3 className="text-xl font-semibold text-charcoal-custom">My Pedagogy</h3>
              </div>

              <div className="bg-lavender-custom bg-opacity-30 p-6 rounded-xl border-l-4 border-lavender-custom">
                <div className="flex items-start">
                  <Lightbulb className="h-6 w-6 text-gold-custom mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 italic text-lg mb-4">
                      Active minds. Purposeful design. Lasting impact.
                    </p>
                    <p className="text-gray-700 text-base mt-2">
                      Great learning happens when we are engaged — not just with the content, but with why it matters. 
                      I design experiences that are hands-on, voice-centered, and driven by curiosity. Whether it’s in 
                      a classroom, a course module, or a PD workshop, my goal is always the same: create space for 
                      learners to think deeply, explore freely, and grow with confidence.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

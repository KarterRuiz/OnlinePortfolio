      import { motion } from 'framer-motion';
      import { ExternalLink, Users, Zap, Target } from 'lucide-react';
      import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
      import { Badge } from '@/components/ui/badge';

      const ProjectsSection = () => {
        const projects = [
          {
            title: "Weebo: Modular K-5 Learning Platform",
            category: "EdTech Platform",
            categoryColor: "bg-teal-custom",
            image: "/weebo-homepage.jpeg", // ← ✅ Use your custom image
            description: "Modular, gamified K-5 learning platform that transforms traditional curriculum into immersive educational adventures through interactive world-building and play-based learning.",
            features: [
              "Modular curriculum system adaptable to any standards",
              "Gamified learning progression and achievement tracking",
              "Interactive world-building educational experiences"
            ],
            outcome: "Currently in development — designed to revolutionize K–5 engagement through joyful learning",
            outcomeColor: "bg-sky-custom"
          }
,
          {
            title: "Educational Theme Park Project",
            category: "Experience Design",
            categoryColor: "bg-coral-custom",
            image: "Theme-Park.jpeg", // ← ✅ Use your custom image
            description: "Comprehensive curriculum design for an educational theme park, blending entertainment with standards-based learning across STEM and humanities.",
            features: [
              "Cross-curricular learning stations",
              "Hands-on STEM experiments and activities",
              "Character-driven storytelling integration"
            ],
            outcome: "Designed comprehensive educational experience for 500+ daily visitors across 12 themed zones",
            outcomeColor: "bg-lavender-custom"
          },
          {
            title: "K–5 PBL Design Course",
            category: "Visual Learning",
            categoryColor: "bg-gold-custom text-charcoal-custom",
            image: "pbl-course.jpeg", // ← ✅ Use your custom image
            description: "A self-paced course to help educators master project-based learning for elementary students.",
            features: [
              "AR-enabled interactive wall displays",
              "Collaborative problem-solving missions",
              "FREE Downloadable PBL Learning Unit Planner Template",
            ],
            outcome: "Adopted by instructional coaches and classroom teachers across multiple districts, this course has become a wonderful foundational resource for implementing effective PBL in any K–5 classrooms.",
            outcomeColor: "bg-teal-custom",
            link: "https://independent-instructional-designer-4797.reach360.com/share/course/52ddff7d-73e5-4cf4-9c9e-90a8e29cd3d4"
          }
        ];

        return (
          <section id="projects" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="bg-white text-charcoal-custom px-8 py-3 rounded-full font-medium transition-all duration-300 hover:bg-blue-600">
                  Featured Projects
                </h2>
                <p className="text-xl text-gray-600">
                  Transforming education through innovative design and technology
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <a href={project.link || "#"} target="_blank" rel="noopener noreferrer" className="block h-full">
                      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                        <div className="relative overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>

                        <CardHeader className="pb-4">
                          <div className="flex items-center mb-3">
                            <Badge className={`${project.categoryColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                              {project.category}
                            </Badge>
                          </div>
                          <CardTitle className="text-xl font-bold text-charcoal-custom">
                            {project.title}
                          </CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-4">
                          <p className="text-gray-600">{project.description}</p>

                          <div className="space-y-2">
                            <div className="flex items-center">
                              <Zap className="h-4 w-4 text-charcoal-custom mr-2" />
                              <h4 className="font-semibold text-charcoal-custom">Key Features:</h4>
                            </div>
                            <ul className="text-sm text-gray-600 space-y-1">
                              {project.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start">
                                  <span className="text-teal-custom mr-2">•</span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className={`${project.outcomeColor} bg-opacity-20 p-3 rounded-lg`}>
                            <div className="flex items-start">
                              <Target className="h-4 w-4 text-charcoal-custom mr-2 mt-0.5 flex-shrink-0" />
                              <p className="text-sm font-medium text-gray-700">
                                <strong>Outcome:</strong> {project.outcome}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );
      };

      export default ProjectsSection;

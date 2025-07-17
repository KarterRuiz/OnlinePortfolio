import { motion } from 'framer-motion';
import { FileText, ClipboardList, Play, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const DownloadsSection = () => {
  const { toast } = useToast();

  const handleDownload = (type: string) => {
    let url = '';
    let filename = '';

    switch (type) {
      case 'resume':
        url = '/karter-ruiz-resume.pdf';
        filename = 'karter-ruiz-resume.pdf';
        break;
      case 'unit-plans':
        url = '/sample-unit-plans.pdf';
        filename = 'sample-unit-plans.pdf';
        break;
      case 'classroom-toolkit':
        url = '/classroom-toolkit.pdf';
        filename = 'classroom-toolkit.pdf';
        break;
      default:
        return;
    }

    try {
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      toast({
        title: 'Download Started',
        description: `${filename} is being downloaded.`,
      });
    } catch (error) {
      toast({
        title: 'Download Failed',
        description: 'There was an error downloading the file. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const downloads = [
    {
      icon: FileText,
      title: 'Professional Resume',
      description:
        'Complete overview of my experience, education, and achievements in EdTech and instructional design.',
      action: () => handleDownload('resume'),
      buttonText: 'Download Resume',
      buttonColor: 'coral-custom',
      iconColor: 'text-coral-custom',
    },
    {
      icon: ClipboardList,
      title: 'Sample Unit Plans',
      description:
        'Detailed curriculum examples showcasing my approach to K-5 instructional design and lesson planning.',
      action: () => handleDownload('unit-plans'),
      buttonText: 'View Samples',
      buttonColor: 'gold-custom',
      iconColor: 'text-gold-custom',
    },
    {
      icon: Play,
      title: 'Classroom Toolkit',
      description:
        'A showcase of real classroom strategies, visuals, and tools I’ve designed to make learning meaningful and engaging.',
      action: () => handleDownload('classroom-toolkit'),
      buttonText: 'Download Classroom Toolkit',
      buttonColor: 'teal-custom',
      iconColor: 'text-teal-custom',
    },
  ];

  return (
    <section id="downloads" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-charcoal-custom mb-4">
            Downloads & Resources
          </h2>
          <p className="text-xl text-gray-700 font-medium">
            Access my professional materials and sample work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {downloads.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full">
                <CardHeader>
                  <motion.div
                    className={`${item.buttonColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <CardTitle className="text-xl font-bold text-charcoal-custom">
                    {item.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-gray-800 text-base leading-relaxed font-medium">
                    {item.description}
                  </p>

                  <Button
                    onClick={item.action}
                    className={`${item.buttonColor} text-white font-bold px-6 py-3 rounded-full hover:opacity-90 transition-all duration-300 w-full group focus:ring-2 focus:ring-offset-2 focus:ring-${item.buttonColor}`}
                    size="lg"
                  >
                    <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                    {item.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadsSection;

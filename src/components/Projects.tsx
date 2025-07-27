import { ExternalLink, Github, Code, Shield, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import project1Image from '@/assets/project-1.jpg';
import project2Image from '@/assets/project-2.jpg';
import project3Image from '@/assets/project-3.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'Password Strength Checker',
      description: 'A comprehensive tool that analyzes password strength using multiple criteria including length, complexity, and common password detection. Features real-time feedback and security recommendations.',
      image: project1Image,
      technologies: ['Python', 'Tkinter', 'Regular Expressions', 'Security Analysis'],
      features: [
        'Real-time password strength analysis',
        'Common password database check',
        'Entropy calculation',
        'Security recommendations'
      ],
      githubUrl: 'https://github.com/your-username/password-strength-checker',
      liveUrl: 'https://your-username.github.io/password-strength-checker',
      icon: Shield
    },
    {
      title: 'File Encryption Tool',
      description: 'A secure file encryption application implementing AES-256 encryption with key derivation functions. Provides a user-friendly interface for encrypting and decrypting sensitive files.',
      image: project2Image,
      technologies: ['Python', 'Cryptography', 'PyQt5', 'AES Encryption'],
      features: [
        'AES-256 encryption implementation',
        'Secure key derivation (PBKDF2)',
        'Batch file processing',
        'Cross-platform compatibility'
      ],
      githubUrl: 'https://github.com/your-username/file-encryption-tool',
      liveUrl: 'https://your-username.github.io/file-encryption-tool',
      icon: Code
    },
    {
      title: 'Network Port Scanner',
      description: 'A multi-threaded network port scanner with service detection capabilities. Features customizable scan types, port ranges, and detailed reporting for network reconnaissance.',
      image: project3Image,
      technologies: ['Python', 'Socket Programming', 'Threading', 'Network Analysis'],
      features: [
        'Multi-threaded scanning',
        'Service version detection',
        'Custom port ranges',
        'Export scan results'
      ],
      githubUrl: 'https://github.com/your-username/network-port-scanner',
      liveUrl: '#', // No live demo for security tools
      icon: Search
    }
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">
            Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing practical cybersecurity tools and applications built to solve real-world problems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="cyber-card group hover:scale-105 transition-all duration-300">
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <project.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-muted-foreground text-xs flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  
                  {project.liveUrl !== '#' && (
                    <Button
                      size="sm"
                      className="flex-1 btn-cyber"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <span className="flex items-center">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </span>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Projects Note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            More projects and contributions available on my GitHub profile
          </p>
          <Button 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => window.open('https://github.com/your-username', '_blank')}
          >
            <Github className="h-4 w-4 mr-2" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
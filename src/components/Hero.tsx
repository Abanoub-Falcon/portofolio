import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';
import profileImage from '@/assets/profile-placeholder.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
      
      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-up mt-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="text-gradient">Abanoub Victor</span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground">
                Cybersecurity Engineer
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl">
              Building secure solutions with passion. Protecting digital assets 
              through innovative security practices and cutting-edge technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="btn-cyber group"
              >
                <span>View My Work</span>
                <ArrowDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
              </Button>
              
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() => window.open('https://raw.githubusercontent.com/Abanoub-Falcon/portofolio/refs/heads/main/Abanoub%20Fahim.pdf', '_blank')} // Replace with your resume URL
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary hover:bg-primary/20 animate-pulse-glow"
                onClick={() => window.open('https://github.com/Abanoub-Falcon', '_blank')}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary hover:bg-primary/20 animate-pulse-glow"
                onClick={() => window.open('https://linkedin.com/in/abanoub-victor', '_blank')}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary hover:bg-primary/20 animate-pulse-glow"
                onClick={() => window.open('mailto:abanoub.victor.gold@gmail.com', '_blank')}
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-slide-right">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/30 animate-glow">
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-float" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-float" style={{animationDelay: '1s'}} />
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-cyber-purple rounded-full animate-float" style={{animationDelay: '2s'}} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;

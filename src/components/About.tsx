import { Shield, Code, Lock, Globe } from 'lucide-react';
import profileImage from '@/assets/profile-placeholder.jpg';

const About = () => {
  const highlights = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Implementing robust security measures to protect digital assets'
    },
    {
      icon: Code,
      title: 'Technical Expertise',
      description: 'Proficient in multiple programming languages and security tools'
    },
    {
      icon: Lock,
      title: 'Ethical Hacking',
      description: 'Identifying vulnerabilities through penetration testing'
    },
    {
      icon: Globe,
      title: 'Network Security',
      description: 'Securing network infrastructure and monitoring threats'
    }
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">
            About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about cybersecurity and committed to building a safer digital world
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-96 h-96 rounded-2xl overflow-hidden cyber-card">
                <img 
                  src={profileImage} 
                  alt="About me" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-primary rounded-xl flex items-center justify-center animate-float">
                <Shield className="h-12 w-12 text-primary-foreground" />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Cybersecurity Engineer & Security Enthusiast
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a beginner cybersecurity engineer passionate about network security 
                and ethical hacking. I build projects to learn and secure digital systems, 
                always staying updated with the latest security trends and threats.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey in cybersecurity began with a fascination for how systems work 
                and how they can be protected. I believe in the power of proactive security 
                measures and continuous learning to stay ahead of emerging threats.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <div key={index} className="cyber-card p-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center cyber-card p-4">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center cyber-card p-4">
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Years Learning</div>
              </div>
              <div className="text-center cyber-card p-4">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
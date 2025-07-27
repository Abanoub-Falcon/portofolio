import { 
  Shield, 
  Terminal, 
  Lock, 
  Network, 
  Eye, 
  Bug,
  Database,
  Code,
  Server,
  Wifi,
  Search,
  FileText
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Security Tools',
      skills: [
        { name: 'Wireshark', icon: Network, level: 85 },
        { name: 'Nmap', icon: Search, level: 80 },
        { name: 'Metasploit', icon: Bug, level: 70 },
        { name: 'Burp Suite', icon: Eye, level: 75 }
      ]
    },
    {
      title: 'Programming',
      skills: [
        { name: 'Python', icon: Code, level: 90 },
        { name: 'JavaScript', icon: Code, level: 75 },
        { name: 'Bash/Shell', icon: Terminal, level: 80 },
        { name: 'PowerShell', icon: Terminal, level: 65 }
      ]
    },
    {
      title: 'Security Domains',
      skills: [
        { name: 'Network Security', icon: Wifi, level: 85 },
        { name: 'Cryptography', icon: Lock, level: 70 },
        { name: 'Penetration Testing', icon: Shield, level: 75 },
        { name: 'Incident Response', icon: FileText, level: 70 }
      ]
    },
    {
      title: 'Systems & OS',
      skills: [
        { name: 'Linux', icon: Server, level: 85 },
        { name: 'Windows', icon: Server, level: 80 },
        { name: 'Docker', icon: Database, level: 70 },
        { name: 'AWS Security', icon: Database, level: 65 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for modern cybersecurity challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="cyber-card">
              <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <skill.icon className="h-4 w-4 text-primary group-hover:text-accent transition-colors" />
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse-glow"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Certifications & Learning
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'CompTIA Security+',
              'CEH (In Progress)',
              'CISSP (Studying)',
              'AWS Security'
            ].map((cert, index) => (
              <div key={index} className="cyber-card p-4 hover:scale-105 transition-transform">
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-semibold text-foreground">{cert}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
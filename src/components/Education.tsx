import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      location: 'Tech City, State',
      period: '2020 - 2024',
      gpa: '3.8/4.0',
      description: 'Specialized in cybersecurity and network security. Coursework included cryptography, network protocols, secure software development, and ethical hacking.',
      achievements: [
        'Dean\'s List for 3 consecutive semesters',
        'Cybersecurity Club President',
        'Capstone project on "AI-Powered Threat Detection"'
      ]
    },
    {
      degree: 'Cybersecurity Bootcamp',
      institution: 'CyberSkills Academy',
      location: 'Online',
      period: '2023',
      gpa: 'Certificate',
      description: 'Intensive 6-month program covering practical cybersecurity skills including penetration testing, incident response, and security analysis.',
      achievements: [
        'Top 5% of graduating class',
        'Completed 50+ hands-on labs',
        'Capstone project on "Network Vulnerability Assessment"'
      ]
    }
  ];

  const relevantCourses = [
    'Network Security',
    'Cryptography',
    'Ethical Hacking',
    'Digital Forensics',
    'Secure Software Development',
    'Risk Management',
    'Incident Response',
    'Malware Analysis'
  ];

  return (
    <section id="education" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">
            Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation in cybersecurity through formal education and continuous learning
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8 mb-16">
          {educationData.map((edu, index) => (
            <div key={index} className="cyber-card">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {edu.degree}
                      </h3>
                      <h4 className="text-primary font-semibold mb-2">
                        {edu.institution}
                      </h4>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-muted-foreground text-sm mb-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        {edu.period}
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm mb-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        {edu.location}
                      </div>
                      <div className="text-primary font-semibold text-sm">
                        {edu.gpa}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {edu.description}
                  </p>

                  <div>
                    <h5 className="font-semibold text-foreground mb-2 flex items-center">
                      <Award className="h-4 w-4 mr-2 text-primary" />
                      Key Achievements
                    </h5>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-muted-foreground text-sm flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Relevant Coursework */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Relevant Coursework
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {relevantCourses.map((course, index) => (
              <div 
                key={index} 
                className="cyber-card p-4 text-center hover:scale-105 transition-transform"
              >
                <div className="text-sm font-medium text-foreground">
                  {course}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
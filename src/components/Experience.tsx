import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Cybersecurity Intern',
      company: 'TechSecure Solutions',
      location: 'Remote',
      period: 'June 2023 - December 2023',
      type: 'Internship',
      description: 'Assisted in analyzing network logs and implementing firewall rules to enhance organizational security posture.',
      responsibilities: [
        'Monitored security events using SIEM tools',
        'Conducted vulnerability assessments on internal systems',
        'Assisted in incident response procedures',
        'Created security awareness training materials',
        'Performed basic penetration testing on test environments'
      ],
      technologies: ['Splunk', 'Nessus', 'Wireshark', 'pfSense', 'Python']
    },
    {
      title: 'IT Support Specialist',
      company: 'Campus Technology Services',
      location: 'University of Technology',
      period: 'September 2022 - May 2023',
      type: 'Part-time',
      description: 'Provided technical support to students and faculty while gaining hands-on experience with system security.',
      responsibilities: [
        'Troubleshot network connectivity issues',
        'Implemented security patches and updates',
        'Monitored system logs for suspicious activities',
        'Educated users on cybersecurity best practices',
        'Assisted with network infrastructure maintenance'
      ],
      technologies: ['Windows Server', 'Active Directory', 'PowerShell', 'Group Policy']
    }
  ];

  const noExperienceMessage = {
    title: 'Seeking New Opportunities',
    description: 'Currently seeking opportunities to apply my cybersecurity skills in a professional environment. Open to internships, entry-level positions, and collaborative projects.',
    goals: [
      'Contribute to organizational security posture',
      'Gain hands-on experience with enterprise security tools',
      'Develop skills in threat analysis and incident response',
      'Work with experienced cybersecurity professionals',
      'Apply academic knowledge to real-world scenarios'
    ]
  };

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">
            Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building practical cybersecurity experience through internships and projects
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <div key={index} className="cyber-card">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Briefcase className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {exp.title}
                      </h3>
                      <h4 className="text-primary font-semibold mb-2">
                        {exp.company}
                      </h4>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-muted-foreground text-sm mb-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm mb-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                      <span className="inline-block bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-4">
                    <h5 className="font-semibold text-foreground mb-2">Key Responsibilities:</h5>
                    <ul className="space-y-1">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="text-muted-foreground text-sm flex items-start">
                          <ChevronRight className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-foreground mb-2">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action for Opportunities */}
        <div className="cyber-card text-center">
          <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6">
            <Briefcase className="h-8 w-8 text-primary-foreground" />
          </div>
          
          <h3 className="text-2xl font-bold text-foreground mb-4">
            {noExperienceMessage.title}
          </h3>
          
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
            {noExperienceMessage.description}
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {noExperienceMessage.goals.map((goal, index) => (
              <div key={index} className="flex items-start text-left">
                <ChevronRight className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">{goal}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

import React from 'react';
import { Code, Database, Figma, Globe, Server, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="h-8 w-8 text-blue-600" />,
      skills: ['HTML5/CSS3', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS']
    },
    {
      title: 'Backend Development',
      icon: <Server className="h-8 w-8 text-blue-600" />,
      skills: ['Node.js', 'Express', 'RESTful APIs', 'Authentication']
    },
    {
      title: 'Database',
      icon: <Database className="h-8 w-8 text-blue-600" />,
      skills: ['MongoDB', 'PostgreSQL', 'SQL', 'Firebase']
    },
    {
      title: 'UI/UX Design',
      icon: <Figma className="h-8 w-8 text-blue-600" />,
      skills: ['Figma', 'Adobe XD', 'Responsive Design', 'Wireframing']
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone className="h-8 w-8 text-blue-600" />,
      skills: ['React Native', 'Progressive Web Apps', 'Mobile-First Design']
    },
    {
      title: 'Deployment & Tools',
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      skills: ['Git', 'GitHub', 'Vercel', 'Netlify', 'CI/CD']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          My Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 transition-transform hover:translate-y-[-5px]"
            >
              <div className="flex flex-col items-center mb-4">
                <div className="mb-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

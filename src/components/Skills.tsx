
import React from 'react';
import { Beaker, Globe, BookOpen, Microscope, Database, LineChart } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Geological Analysis',
      icon: <Microscope className="h-8 w-8 text-violet-400" />,
      skills: ['Mineral Identification', 'Rock Classification', 'Structural Analysis', 'Geological Mapping', 'Field Research']
    },
    {
      title: 'Nuclear Instrumentation',
      icon: <Beaker className="h-8 w-8 text-violet-400" />,
      skills: ['XRF Analysis', 'Gamma Spectrometry', 'BAM in Air Quality', 'Liquid Scintillation', 'Radiotracers', 'E-beam']
    },
    {
      title: 'Research Methods',
      icon: <BookOpen className="h-8 w-8 text-violet-400" />,
      skills: ['Scientific Writing', 'Field Sampling', 'Laboratory Techniques', 'Research Design']
    },
    {
      title: 'Data Analysis',
      icon: <LineChart className="h-8 w-8 text-violet-400" />,
      skills: ['Statistical Analysis', 'Data Visualization', 'GIS', 'Remote Sensing']
    },
    {
      title: 'Technical Skills',
      icon: <Database className="h-8 w-8 text-violet-400" />,
      skills: ['Laboratory Equipment', 'Sample Preparation']
    },
    {
      title: 'Software Development',
      icon: <Globe className="h-8 w-8 text-violet-400" />,
      skills: ['Web Development', 'Startup Building', 'Python', 'Database Development']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-navy-800 to-navy-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          My Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-navy-800/80 backdrop-blur-sm rounded-lg shadow-md p-6 transition-transform hover:translate-y-[-5px] border border-violet-400"
            >
              <div className="flex flex-col items-center mb-4">
                <div className="mb-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="bg-violet-900 text-violet-200 text-sm px-3 py-1 rounded-full"
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

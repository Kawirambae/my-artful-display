
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: 'Radiochemical Research in Warsaw, Poland',
      description: 'Worked at the Institute of Nuclear Chemistry in Warsaw, Poland, using radiotracers to improve solvent extraction processes and electric beam technology to break down inorganic and organic compounds in waste.',
      tags: ['Radiotracers', 'Electric Beam', 'Waste Management', 'Laboratory Analysis']
    },
    {
      title: 'Sediment Tracking in Saldanha Bay, South Africa',
      description: 'Research at Stellenbosch University using natural radionuclides to understand sediment movement patterns in Saldanha Bay, Cape Town, South Africa.',
      tags: ['Natural Radionuclides', 'Sediment Movement', 'Field Research', 'Environmental Analysis']
    },
    {
      title: 'DUGS Development for Kilindini Harbour',
      description: 'Part of an IAEA research team that developed DUGS, a remote equipment for studying radionuclides in sediments in Kilindini Harbour, Mombasa, Kenya.',
      tags: ['DUGS Technology', 'Radionuclides', 'Harbor Research', 'Equipment Development', 'IAEA Collaboration']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-navy-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-navy-800 overflow-hidden shadow-lg border border-violet-400 transition-all hover:shadow-violet-400/20 hover:border-violet-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-violet-900 text-violet-200 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


import React from 'react';
import { ExternalLink, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Radiometric Dating of Volcanic Rocks',
      description: 'Research project focusing on the application of radiometric dating techniques to volcanic rocks in the East African Rift Valley.',
      image: 'https://images.unsplash.com/photo-1509059852496-f3822ae057bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: ['Radiometric Dating', 'Volcanic Geology', 'Field Research', 'Laboratory Analysis'],
      reportLink: '#',
      detailsLink: '#'
    },
    {
      title: 'Uranium Deposit Characterization',
      description: 'Assessment and characterization of uranium deposits in sedimentary basins using geochemical and geophysical methods.',
      image: 'https://images.unsplash.com/photo-1624913503273-5f9c4e980dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: ['Uranium Geology', 'Geochemistry', 'Resource Assessment', 'Environmental Impact'],
      reportLink: '#',
      detailsLink: '#'
    },
    {
      title: 'Environmental Impact of Mining Activities',
      description: 'Study on the environmental impact of mining activities on groundwater quality and soil contamination in mining regions.',
      image: 'https://images.unsplash.com/photo-1605050825077-289927d3a3bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: ['Environmental Geology', 'Mining Impact', 'Water Quality', 'Remediation'],
      reportLink: '#',
      detailsLink: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 transition-all hover:shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button asChild size="sm" variant="outline" className="flex items-center gap-1">
                    <a href={project.reportLink} target="_blank" rel="noopener noreferrer">
                      <FileText className="h-4 w-4" />
                      Research Report
                    </a>
                  </Button>
                  
                  <Button asChild size="sm" variant="outline" className="flex items-center gap-1">
                    <a href={project.detailsLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Details
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-blue-600 hover:bg-blue-700">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

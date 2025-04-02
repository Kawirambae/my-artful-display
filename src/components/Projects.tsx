
import React from 'react';
import { ExternalLink, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: 'Radiochemical Research in Warsaw, Poland',
      description: 'Worked at the Institute of Nuclear Chemistry in Warsaw, Poland, using radiotracers to improve solvent extraction processes and electric beam technology to break down inorganic and organic compounds in waste.',
      image: '/lovable-uploads/2e01ef7b-5913-417a-9e74-3c9ba455763e.png',
      tags: ['Radiotracers', 'Electric Beam', 'Waste Management', 'Laboratory Analysis'],
      reportLink: '#',
      detailsLink: '#'
    },
    {
      title: 'Sediment Tracking in Saldanha Bay, South Africa',
      description: 'Research at Stellenbosch University using natural radionuclides to understand sediment movement patterns in Saldanha Bay, Cape Town, South Africa.',
      image: '/lovable-uploads/f5dddc49-82c6-4d09-8227-53a7ad63660f.png',
      tags: ['Natural Radionuclides', 'Sediment Movement', 'Field Research', 'Environmental Analysis'],
      reportLink: '#',
      detailsLink: 'https://www.ans.org/news/article-6342/the-iaea-and-two-african-universities-deploy-sediment-tracking-tech-in-kenya/'
    },
    {
      title: 'DUGS Development for Kilindini Harbour',
      description: 'Part of an IAEA research team that developed DUGS, a remote equipment for studying radionuclides in sediments in Kilindini Harbour, Mombasa, Kenya.',
      image: '/lovable-uploads/a7b9fb86-ec01-45ab-b682-69624d21b7b9.png',
      tags: ['DUGS Technology', 'Radionuclides', 'Harbor Research', 'Equipment Development', 'IAEA Collaboration'],
      reportLink: 'https://www.ans.org/news/article-6342/the-iaea-and-two-african-universities-deploy-sediment-tracking-tech-in-kenya/',
      detailsLink: '#'
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
              <div className="h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                  onError={(e) => {
                    console.error(`Error loading image: ${project.image}`);
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
              </div>
              
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
                
                <div className="flex gap-3 mt-4">
                  <Button asChild size="sm" variant="outline" className="flex items-center gap-1 border-violet-400 text-violet-300 hover:bg-violet-900 hover:text-white">
                    <a href={project.reportLink} target="_blank" rel="noopener noreferrer">
                      <FileText className="h-4 w-4" />
                      Research Report
                    </a>
                  </Button>
                  
                  <Button asChild size="sm" variant="outline" className="flex items-center gap-1 border-violet-400 text-violet-300 hover:bg-violet-900 hover:text-white">
                    <a href={project.detailsLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Details
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-violet-600 hover:bg-violet-700 text-white">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

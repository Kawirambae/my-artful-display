
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

const Projects = () => {
  const { toast } = useToast();
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});
  
  const projects = [
    {
      title: 'Radiochemical Research in Warsaw, Poland',
      description: 'Worked at the Institute of Nuclear Chemistry in Warsaw, Poland, using radiotracers to improve solvent extraction processes and electric beam technology to break down inorganic and organic compounds in waste.',
      image: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3',
      tags: ['Radiotracers', 'Electric Beam', 'Waste Management', 'Laboratory Analysis']
    },
    {
      title: 'Sediment Tracking in Saldanha Bay, South Africa',
      description: 'Research at Stellenbosch University using natural radionuclides to understand sediment movement patterns in Saldanha Bay, Cape Town, South Africa.',
      image: 'https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3',
      tags: ['Natural Radionuclides', 'Sediment Movement', 'Field Research', 'Environmental Analysis']
    },
    {
      title: 'DUGS Development for Kilindini Harbour',
      description: 'Part of an IAEA research team that developed DUGS, a remote equipment for studying radionuclides in sediments in Kilindini Harbour, Mombasa, Kenya.',
      image: 'https://images.unsplash.com/photo-1582132062487-5d8af66a3574?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3',
      tags: ['DUGS Technology', 'Radionuclides', 'Harbor Research', 'Equipment Development', 'IAEA Collaboration']
    }
  ];

  const handleImageError = (index: number) => {
    console.log(`Image ${index} failed to load, using placeholder`);
    setFailedImages(prev => ({ ...prev, [index]: true }));
    
    toast({
      title: "Image couldn't load",
      description: "Using placeholder image instead",
      variant: "destructive",
    });
  };

  return (
    <section id="projects" className="py-20 bg-navy-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-navy-800 overflow-hidden shadow-lg border border-violet-400 transition-all hover:shadow-violet-400/20 hover:border-violet-300">
              <div className="h-60 overflow-hidden bg-navy-700 relative">
                <img 
                  src={failedImages[index] ? '/placeholder.svg' : project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                  onError={() => handleImageError(index)}
                  loading="lazy"
                />
                {failedImages[index] && (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-300 text-sm p-4 text-center">
                    Image unavailable
                  </div>
                )}
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

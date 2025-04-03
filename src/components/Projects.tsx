
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

const Projects = () => {
  const { toast } = useToast();
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});
  
  const projects = [
    {
      title: 'Radiochemical Research in Warsaw, Poland',
      description: 'Worked at the Institute of Nuclear Chemistry in Warsaw, Poland, using radiotracers to improve solvent extraction processes and electric beam technology to break down inorganic and organic compounds in waste.',
      image: '/lovable-uploads/a399a9c9-d99c-4df9-a4de-787810d34654.png',
      tags: ['Radiotracers', 'Electric Beam', 'Waste Management', 'Laboratory Analysis']
    },
    {
      title: 'Sediment Tracking in Saldanha Bay, South Africa',
      description: 'Research at Stellenbosch University using natural radionuclides to understand sediment movement patterns in Saldanha Bay, Cape Town, South Africa.',
      image: '/placeholder.svg',
      tags: ['Natural Radionuclides', 'Sediment Movement', 'Field Research', 'Environmental Analysis']
    },
    {
      title: 'DUGS Development for Kilindini Harbour',
      description: 'Part of an IAEA research team that developed DUGS, a remote equipment for studying radionuclides in sediments in Kilindini Harbour, Mombasa, Kenya.',
      image: '/placeholder.svg',
      tags: ['DUGS Technology', 'Radionuclides', 'Harbor Research', 'Equipment Development', 'IAEA Collaboration']
    }
  ];

  // Monitor uploaded images from chat
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === 'image-upload' && data.url && data.index !== undefined) {
          // Update the project image at the specified index
          const projectIndex = data.index;
          if (projectIndex >= 0 && projectIndex < projects.length) {
            projects[projectIndex].image = data.url;
            
            // Reset failed image state for this index
            setFailedImages(prev => {
              const newState = {...prev};
              delete newState[projectIndex];
              return newState;
            });
          }
        }
      } catch (e) {
        // Ignore parse errors for non-JSON messages
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

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

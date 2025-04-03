
import React from 'react';
import { ArrowDownCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative pt-16 pb-0">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-navy-800 -z-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 animate-fade-in">
          {/* Hero Image */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0 order-1 md:order-1">
            <div className="relative w-full max-w-md">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border-4 border-violet-300">
                <img 
                  src="/lovable-uploads/701f3a61-ef37-4b7f-a936-3fb5d5a2d511.png" 
                  alt="Loise Kawira Mbae" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Hero Text */}
          <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-2">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Hi, I'm <span className="text-violet-300">Loise Kawira Mbae</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-300 mb-8">
              Nuclear Geologist from Kenya creating impactful research and analysis
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center md:justify-start">
              <Button variant="outline" className="border-violet-400 text-violet-300 hover:bg-violet-900 hover:text-white">
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-violet-300 hover:text-white transition-colors"
      >
        <ArrowDownCircle className="h-10 w-10" />
      </a>
    </section>
  );
};

export default Hero;

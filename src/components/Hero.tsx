
import React from 'react';
import { ArrowDownCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-16 pb-0">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Hi, I'm <span className="text-blue-600">Loise Kawira Mbae</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-600 mb-8 max-w-2xl">
            Nuclear Geologist from Kenya creating impactful research and analysis
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              View My Work
            </Button>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Download CV
            </Button>
          </div>
          
          <a 
            href="#about" 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400 hover:text-gray-600 transition-colors"
          >
            <ArrowDownCircle className="h-10 w-10" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

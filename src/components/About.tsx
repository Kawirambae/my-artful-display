
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const age = 27;
  
  return (
    <section id="about" className="py-20 bg-navy-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="col-span-1 flex justify-center">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-violet-300 shadow-lg">
                <img 
                  src="/lovable-uploads/701f3a61-ef37-4b7f-a936-3fb5d5a2d511.png" 
                  alt="Loise Kawira Mbae" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Hello! I'm Loise Kawira Mbae, a {age}-year-old Nuclear Geologist from Kenya with a passion for geological research and environmental science analysis.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I specialize in using nuclear instrumentation such as XRF and gamma spectrometry to analyze environmental samples. My research focuses on environmental science, particularly studying radionuclides and their interactions with geological materials.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My goal is to contribute to environmental monitoring and conservation through innovative nuclear geology techniques that help us better understand our planet and promote sustainable resource management.
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-navy-700 border-violet-400">
                <CardContent className="p-6">
                  <h4 className="text-xl font-medium text-white mb-3">Hobbies</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>Swimming</li>
                    <li>Travelling to new places</li>
                    <li>Writing</li>
                    <li>Reading books and scientific journals</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-navy-700 border-violet-400">
                <CardContent className="p-6">
                  <h4 className="text-xl font-medium text-white mb-3">Achievements</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>Successfully carried out sample collection of sediments in Nairobi River, Kilindini Harbour and Saldanha Bay South Africa</li>
                    <li>Been part of an IAEA research team that created a new tool for underwater detection of natural radionuclides in sediments</li>
                    <li>Traveled abroad for research at the Institute of Nuclear Science in Warsaw, Poland and Stellenbosch University, South Africa</li>
                    <li>Presented and published conference papers with a pending peer-reviewed publication</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

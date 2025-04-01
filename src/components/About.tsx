
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const age = 27;
  
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="col-span-1 flex justify-center">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-100 shadow-lg">
                <img 
                  src="/profile-image.jpg" 
                  alt="Loise Kawira Mbae" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Hello! I'm Loise Kawira Mbae, a {age}-year-old Nuclear Geologist from Kenya with a passion for geological research and analysis.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With a strong background in nuclear geology, I specialize in the study of radioactive elements in rocks and minerals, and their applications in dating geological materials and understanding Earth's processes.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My goal is to contribute to the field of geology through innovative research and practical applications that help us better understand our planet and use its resources sustainably.
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Hobbies & Interests
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-xl font-medium text-gray-800 mb-3">Hobbies</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Rock climbing and hiking</li>
                    <li>Mineral collection and identification</li>
                    <li>Photography of geological formations</li>
                    <li>Reading scientific journals</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-xl font-medium text-gray-800 mb-3">Favorite Memories</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Field research in the Great Rift Valley</li>
                    <li>Presenting my first paper at an international conference</li>
                    <li>Discovering a rare mineral formation</li>
                    <li>Teaching geology to undergraduate students</li>
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


import React from 'react';

const About = () => {
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
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Hello! I'm a passionate web developer with a strong foundation in modern frontend technologies.
                I enjoy creating responsive, user-friendly websites and applications that deliver exceptional user experiences.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With 3+ years of experience in the field, I've worked on various projects ranging from small business websites to complex web applications.
                My goal is to build digital solutions that are not only visually appealing but also functional and accessible to all users.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

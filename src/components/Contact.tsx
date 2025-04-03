import React from 'react';
import { Mail, MapPin, Phone, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                <div>
                  <h4 className="font-medium text-gray-800">Location</h4>
                  <p className="text-gray-600">Nairobi, Kenya</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                <div>
                  <h4 className="font-medium text-gray-800">Email</h4>
                  <a href="mailto:kayloise@gmail.com" className="text-blue-600 hover:underline">
                    kayloise@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                <div>
                  <h4 className="font-medium text-gray-800">Phone</h4>
                  <a href="tel:+254796111317" className="text-blue-600 hover:underline">
                    +254 796 111 317
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Download CV
              </h3>
              
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <a href="/Loise_Mbae_CV.pdf" download className="text-white">
                  Download CV
                </a>
              </Button>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Follow Me
                </h3>
                
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/loise-mbae-68500b148?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BTAJoyHftSx%2BmdSUmB2XQyA%3D%3D" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white h-10 w-10 rounded-full flex items-center justify-center shadow-sm hover:shadow transition-shadow"
                  >
                    <Linkedin className="h-5 w-5 text-blue-600" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Send Me a Message
            </h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="John Doe" 
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  type="text" 
                  placeholder="Research Collaboration" 
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Your message here..." 
                  rows={5}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

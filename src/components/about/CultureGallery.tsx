
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { ImageIcon, Camera } from 'lucide-react';

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    caption: "Team collaboration session"
  },
  {
    url: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    caption: "Our annual team retreat"
  },
  {
    url: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    caption: "Whiteboard strategy session"
  },
  {
    url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    caption: "Our workspace environment"
  },
  {
    url: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    caption: "Team-building event"
  }
];

const CultureGallery = () => {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <div className="sticky top-24">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-masarna-orange/10 rounded-full">
                  <Camera className="w-6 h-6 text-masarna-orange" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold ml-4 text-gray-900">Our Culture</h2>
              </div>
              
              <p className="text-gray-600 mb-6">
                At Masarna, we foster a culture of innovation, collaboration, and continuous learning. 
                We believe that our team's diverse perspectives and experiences are our greatest strength.
              </p>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-start">
                  <div className="bg-masarna-orange/20 p-2 rounded-full">
                    <div className="bg-masarna-orange w-2 h-2 rounded-full"></div>
                  </div>
                  <p className="ml-3 text-gray-700">Flexible work environment that prioritizes outcomes</p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-masarna-orange/20 p-2 rounded-full">
                    <div className="bg-masarna-orange w-2 h-2 rounded-full"></div>
                  </div>
                  <p className="ml-3 text-gray-700">Continuous learning and professional development</p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-masarna-orange/20 p-2 rounded-full">
                    <div className="bg-masarna-orange w-2 h-2 rounded-full"></div>
                  </div>
                  <p className="ml-3 text-gray-700">Regular team events and collaborative workshops</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3 reveal">
            <Carousel className="w-full">
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                    <div className="p-1">
                      <div className="overflow-hidden rounded-xl shadow-md bg-white">
                        <div className="aspect-video relative overflow-hidden group">
                          <img 
                            src={image.url} 
                            alt={image.caption} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <p className="text-white p-4">{image.caption}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 bg-white/80 hover:bg-white" />
              <CarouselNext className="right-2 bg-white/80 hover:bg-white" />
            </Carousel>
            
            <div className="mt-8 grid grid-cols-3 gap-3">
              {galleryImages.slice(0, 3).map((image, index) => (
                <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-sm">
                  <img 
                    src={image.url} 
                    alt={image.caption} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CultureGallery;

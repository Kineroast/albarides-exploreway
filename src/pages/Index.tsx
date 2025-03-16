import { useEffect, useRef } from 'react';
import { Car, Users, ShieldCheck, Clock, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import DestinationCard from '@/components/DestinationCard';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';

const Index = () => {
  // Using HTMLElement instead of HTMLDivElement to avoid the 'align' property error
  const sectionRefs = useRef<HTMLElement[]>([]);
  
  // Handle fade-in animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const fadeElements = document.querySelectorAll('.fade-in-section');
    fadeElements.forEach((el) => observer.observe(el));
    
    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  // Popular destinations data
  const destinations = [
    {
      name: "Historic City Center",
      image: "https://images.unsplash.com/photo-1526659666037-3e7bbc2d1d6e?q=80&w=1000",
      description: "Explore the historic charm and cultural treasures in the heart of the city.",
      rating: 4.8
    },
    {
      name: "Coastal Beach Resort",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000",
      description: "Relax and enjoy sunny beaches, clear waters, and stunning coastal views.",
      rating: 4.9
    },
    {
      name: "Mountain Adventure Park",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000",
      description: "Experience thrilling activities and breathtaking scenery in the mountains.",
      rating: 4.7
    },
    {
      name: "Cultural Heritage Site",
      image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1000",
      description: "Witness centuries of history at this UNESCO World Heritage landmark.",
      rating: 4.6
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Premium Transportation to Tourist Attractions"
        subtitle="Experience comfort, reliability and style with AlbaRides - your ultimate travel companion to explore the finest attractions."
        backgroundImage="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000"
        buttonText="Book a Ride"
        buttonLink="#booking"
      />

      {/* Services Section */}
      <section className="section-padding bg-white" 
        ref={(el) => {
          if (el && sectionRefs.current) sectionRefs.current[0] = el;
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Our Premium Services</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover why travelers choose AlbaRides for their journey to tourist attractions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              title="Luxury Vehicles"
              description="Travel in comfort with our fleet of premium, well-maintained vehicles suitable for any group size."
              icon={Car}
              className="fade-in-section"
            />
            <ServiceCard
              title="Professional Drivers"
              description="Our experienced, friendly drivers ensure a safe and pleasant journey every time."
              icon={Users}
              className="fade-in-section"
            />
            <ServiceCard
              title="Safety First"
              description="Regular vehicle maintenance, insurance coverage, and strict safety protocols for your peace of mind."
              icon={ShieldCheck}
              className="fade-in-section"
            />
            <ServiceCard
              title="Punctual Service"
              description="We value your time. Count on us for prompt pickups and efficient routes to your destination."
              icon={Clock}
              className="fade-in-section"
            />
          </div>
        </div>
      </section>
      
      {/* Booking Form Section */}
      <section id="booking" className="py-20 bg-alba-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
          <div className="text-center mb-12 fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Book Your Ride</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Quick and easy booking process. Reserve your premium transfer in minutes.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto fade-in-section">
            <BookingForm />
          </div>
        </div>
      </section>
      
      {/* Destinations Section */}
      <section className="section-padding bg-white" 
        ref={(el) => {
          if (el && sectionRefs.current) sectionRefs.current[1] = el;
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 fade-in-section">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Popular Destinations</h2>
              <p className="text-lg text-slate-600 max-w-2xl">
                Explore the most sought-after tourist attractions we service. Each destination offers unique experiences.
              </p>
            </div>
            
            <a href="/destinations" className="mt-6 md:mt-0 inline-flex items-center text-alba-700 font-medium hover:text-alba-900 transition-colors">
              View all destinations
              <ArrowRight size={18} className="ml-1" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((destination, index) => (
              <DestinationCard
                key={index}
                name={destination.name}
                image={destination.image}
                description={destination.description}
                rating={destination.rating}
                className={cn(
                  "fade-in-section",
                  index % 2 === 0 ? "md:translate-y-4" : ""
                )}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section-padding bg-slate-50" 
        ref={(el) => {
          if (el && sectionRefs.current) sectionRefs.current[2] = el;
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">What Our Clients Say</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Read testimonials from travelers who have experienced our premium transfer services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-md fade-in-section">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full bg-alba-200 flex items-center justify-center text-alba-700 font-medium">
                      {['JD', 'SM', 'KW'][index]}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      {['John Doe', 'Sarah Miller', 'Kevin Wang'][index]}
                    </h4>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-slate-600">
                  {[
                    "Excellent service from start to finish! Our driver was professional, punctual, and the vehicle was immaculate. Made our trip to the historic district smooth and enjoyable.",
                    "We were so impressed with AlbaRides. The booking process was simple, the driver was knowledgeable about local attractions, and the ride was comfortable. Highly recommend!",
                    "Used AlbaRides for our family trip to the beach resort. The spacious vehicle accommodated all our luggage, and the driver was friendly and helpful. Will definitely use again!"
                  ][index]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-alba-700 text-white" 
        ref={(el) => {
          if (el && sectionRefs.current) sectionRefs.current[3] = el;
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Travel Experience?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Book your premium ride today and focus on enjoying your destination, not worrying about how to get there.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-white text-alba-700 hover:bg-slate-100 transition-colors font-semibold py-3 px-8 rounded-md shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
            >
              Book Now
            </a>
            <a 
              href="/services" 
              className="bg-transparent border-2 border-white/70 hover:border-white text-white hover:bg-white/10 transition-all font-semibold py-3 px-8 rounded-md"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;

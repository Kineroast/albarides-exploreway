
import { useEffect } from 'react';
import { Shield, Award, ThumbsUp, Car, User, MapPin } from 'lucide-react';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { cn } from '@/lib/utils';

const About = () => {
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

  const stats = [
    { label: 'Happy Clients', value: '10,000+' },
    { label: 'Tourist Destinations', value: '150+' },
    { label: 'Premium Vehicles', value: '75+' },
    { label: 'Years of Service', value: '8+' },
  ];

  const values = [
    { 
      icon: Shield, 
      title: 'Safety', 
      description: 'Your safety is our top priority. Our vehicles undergo regular maintenance, and our drivers have extensive safety training.' 
    },
    { 
      icon: Award, 
      title: 'Excellence', 
      description: 'We strive for excellence in every aspect of our service, from the booking process to your final destination.' 
    },
    { 
      icon: ThumbsUp, 
      title: 'Reliability', 
      description: 'Count on us to be there when promised. Punctuality and dependability are cornerstones of our service.' 
    },
  ];

  const team = [
    {
      name: 'Alexander Rivera',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500',
      bio: 'With over 15 years in the tourism and transportation industry, Alex founded AlbaRides with a vision to transform tourist transfers into a premium experience.'
    },
    {
      name: 'Sophia Chen',
      role: 'Operations Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500',
      bio: 'Sophia oversees our day-to-day operations, ensuring every ride meets our high standards of quality and customer satisfaction.'
    },
    {
      name: 'Michael Torres',
      role: 'Fleet Manager',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=500',
      bio: 'Michael manages our growing fleet of premium vehicles, focusing on maintenance, safety, and implementing the latest comfort technologies.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 bg-alba-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-alba-700 opacity-5 transform -skew-x-12" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
          <div className="max-w-3xl fade-in-section">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              About AlbaRides
            </h1>
            <p className="text-xl text-slate-700 mb-8">
              We're more than just transportation. We're your gateway to memorable journeys and exceptional experiences.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 fade-in-section">
              <div className="inline-block bg-alba-100 text-alba-700 font-medium px-4 py-1 rounded-full text-sm mb-4">
                Our Journey
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                The AlbaRides Story
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  AlbaRides was founded in 2015 with a simple yet powerful vision: to transform tourist transfers from a mere necessity into a premium experience that enhances your overall journey.
                </p>
                <p>
                  We noticed that while many aspects of tourism had evolved to offer exceptional experiences, transportation to attractions often remained an afterthought. We set out to change that by creating a service that combines comfort, reliability, and local expertise.
                </p>
                <p>
                  Starting with just three vehicles and a passion for service excellence, we've grown to become a trusted name in tourist transportation, serving thousands of happy travelers each year.
                </p>
                <p>
                  Today, our fleet of premium vehicles and professional drivers continues to connect visitors with the most amazing destinations, making the journey itself a memorable part of your travel experience.
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 fade-in-section">
              <div className="relative">
                <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1494783367193-149034c05e8d?q=80&w=1000" 
                    alt="AlbaRides team with vehicles" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 w-28 h-28 flex flex-col items-center justify-center">
                  <span className="block text-xl font-bold text-alba-700">2015</span>
                  <span className="text-sm text-slate-500">Founded</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Statistics Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-xl bg-white shadow-sm fade-in-section"
              >
                <div className="text-3xl md:text-4xl font-bold text-alba-700 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Our Core Values</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              These principles guide everything we do, from our customer interactions to our business decisions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index} 
                  className="text-center p-8 rounded-2xl bg-alba-50 border border-alba-100 fade-in-section"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-alba-100 text-alba-700 mb-6">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-slate-900">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-alba-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose AlbaRides</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Discover what sets us apart and why thousands of travelers trust us for their journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Car, 
                title: 'Premium Fleet', 
                description: 'Modern, well-maintained vehicles equipped with amenities for your comfort.' 
              },
              { 
                icon: User, 
                title: 'Expert Drivers', 
                description: 'Professional, knowledgeable drivers who enhance your travel experience.' 
              },
              { 
                icon: MapPin, 
                title: 'Local Expertise', 
                description: 'Insights and recommendations to make the most of your destination visit.' 
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index} 
                  className={cn(
                    "p-8 rounded-2xl bg-white/10 backdrop-blur-sm fade-in-section",
                    index === 1 ? "transform md:translate-y-6" : ""
                  )}
                >
                  <div className="flex items-center mb-6">
                    <div className="mr-4 bg-white/20 p-3 rounded-lg">
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-white/80">{feature.description}</p>
                </div>
              );
            })}
          </div>
          
          <div className="mt-12 text-center fade-in-section">
            <a 
              href="/services" 
              className="inline-block bg-white text-alba-700 hover:bg-slate-100 transition-colors font-semibold py-3 px-8 rounded-md shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </section>
      
      {/* Our Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Meet Our Team</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The passionate people behind AlbaRides who work tirelessly to ensure your journey is exceptional.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="fade-in-section">
                <div className="rounded-2xl overflow-hidden bg-white shadow-md transition-all hover:shadow-lg">
                  <div className="aspect-w-3 aspect-h-2">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-slate-900 mb-1">{member.name}</h3>
                    <p className="text-alba-700 font-medium mb-4">{member.role}</p>
                    <p className="text-slate-600">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Ready to Experience the AlbaRides Difference?</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Join thousands of satisfied travelers who have made their journeys memorable with our premium transfer services.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-alba-700 text-white hover:bg-alba-800 transition-colors font-semibold py-3 px-8 rounded-md shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
            >
              Book a Ride
            </a>
            <a 
              href="/services" 
              className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-all font-semibold py-3 px-8 rounded-md shadow-sm"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;

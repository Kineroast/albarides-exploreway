
import React from 'react';
import { Car, Plane, Users, Clock, Map, Award } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import Footer from '@/components/Footer';

const Services = () => {
  const packages = [
    {
      title: "City Explorer",
      description: "Discover the charm of Tirana and other Albanian cities with our comprehensive city tour package. Includes visits to historical sites, museums, and local markets.",
      icon: Map,
      price: "€50"
    },
    {
      title: "Coastal Adventure",
      description: "Experience the stunning Albanian Riviera with our coastal tour package. Visit pristine beaches from Vlora to Saranda and enjoy the crystal-clear waters of the Ionian Sea.",
      icon: Plane,
      price: "€75"
    },
    {
      title: "Mountain Escape",
      description: "Explore Albania's breathtaking mountains with guided tours to national parks including Theth, Valbona Valley, and the Albanian Alps.",
      icon: Award,
      price: "€65"
    },
    {
      title: "Cultural Heritage Tour",
      description: "Immerse yourself in Albania's rich history with visits to UNESCO World Heritage sites like Butrint, Berat, and Gjirokastër.",
      icon: Users,
      price: "€60"
    },
    {
      title: "Airport Transfer",
      description: "Comfortable transportation from Tirana International Airport to your accommodation anywhere in Albania with professional drivers.",
      icon: Car,
      price: "€30"
    },
    {
      title: "Custom Day Trip",
      description: "Create your own Albanian adventure with our customizable day trip service. Our expert guides will help you design the perfect itinerary.",
      icon: Clock,
      price: "€90"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-alba-50/30">
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-alba-950 leading-tight">
              Our Services & Packages
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
              Experience Albania's treasures with our carefully crafted transportation packages
            </p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className="flex flex-col h-full">
                <ServiceCard 
                  title={pkg.title} 
                  description={pkg.description} 
                  icon={pkg.icon}
                >
                  <div className="mt-4 pt-2 border-t border-alba-100">
                    <span className="font-semibold text-alba-700 text-lg">{pkg.price}</span>
                    <span className="text-slate-600 text-sm"> / person</span>
                  </div>
                </ServiceCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 px-6 md:px-12 bg-alba-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-alba-950">
              Why Choose AlbaRides?
            </h2>
            <p className="mt-4 text-lg text-slate-700 max-w-2xl mx-auto">
              We provide exceptional service with local expertise to ensure your Albanian journey is unforgettable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-alba-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-alba-700" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Local Guides</h3>
              <p className="text-slate-600">Knowledgeable guides who provide fascinating insights about Albanian culture and history.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-alba-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="text-alba-700" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Modern Fleet</h3>
              <p className="text-slate-600">Comfortable, air-conditioned vehicles maintained to the highest safety standards.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-alba-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-alba-700" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-slate-600">Customizable departure times and itineraries to fit your travel plans.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

import React from 'react';
import { ExternalLink } from 'lucide-react';
import DestinationCard from '@/components/DestinationCard';
import Footer from '@/components/Footer';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Destinations = () => {
  const destinations = [
    {
      id: "berat",
      name: "Berat - City of a Thousand Windows",
      image: "https://images.unsplash.com/photo-1592489261565-4959d7252a98?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1000",
      description: "Explore the UNESCO-listed historic town with its unique Ottoman architecture and towering castle overlooking the Osum River.",
      rating: 4.8,
      highlights: [
        "UNESCO World Heritage Site",
        "Ottoman-era architecture",
        "Berat Castle with panoramic views",
        "Mangalem and Gorica historic quarters",
        "Onufri Museum with religious artifacts"
      ]
    },
    {
      id: "albanian-riviera",
      name: "Albanian Riviera",
      image: "https://images.unsplash.com/photo-1606994868513-d91f28eaab33?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1000",
      description: "Discover pristine beaches and crystal-clear waters along Albania's stunning southern coastline from Vlora to Saranda.",
      rating: 4.9,
      highlights: [
        "Ksamil Islands with white sandy beaches",
        "Dhermi's vibrant beach scene",
        "Gjipe Beach - a hidden paradise",
        "Porto Palermo Castle",
        "Llogara National Park with spectacular views"
      ]
    },
    {
      id: "theth",
      name: "Theth National Park",
      image: "https://images.unsplash.com/photo-1551854596-0aa248fc995b?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1000",
      description: "Experience the majestic Albanian Alps with hiking trails, waterfalls, and traditional stone houses in this unspoiled mountain village.",
      rating: 4.7,
      highlights: [
        "Blue Eye waterfall",
        "Hiking to Valbona Pass",
        "Traditional Albanian stone houses",
        "Grunas Waterfall",
        "Lock-in Tower (Kulla)"
      ]
    },
    {
      id: "butrint",
      name: "Butrint Archaeological Site",
      image: "https://images.unsplash.com/photo-1559735614-edfc9fdf95fc?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1000",
      description: "Visit this UNESCO World Heritage site featuring ruins from Greek, Roman, Byzantine, and Venetian times in a beautiful natural setting.",
      rating: 4.8,
      highlights: [
        "Ancient Greek Theater",
        "Roman Forum",
        "Byzantine Baptistery with mosaics", 
        "Venetian Tower",
        "Museum of archaeological findings"
      ]
    },
    {
      id: "gjirokaster",
      name: "Gjirokastër",
      image: "https://images.unsplash.com/photo-1600093112524-288811dd24c0?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1000",
      description: "Tour the 'City of Stone' with its Ottoman-era architecture, imposing castle, and charming cobblestone streets in the Albanian highlands.",
      rating: 4.6,
      highlights: [
        "Gjirokastër Castle with panoramic views",
        "Ethnographic Museum (Enver Hoxha's birthplace)",
        "Traditional Ottoman houses",
        "Bazaar of Gjirokastër",
        "Zekate House - finest example of Ottoman architecture"
      ]
    },
    {
      id: "blue-eye",
      name: "Blue Eye Spring (Syri i Kaltër)",
      image: "https://images.unsplash.com/photo-1604082787517-e5e06d1ad537?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1000",
      description: "Marvel at this natural phenomenon where crystal clear water bubbles from a more than 50-meter-deep pool with stunning blue colors.",
      rating: 4.9,
      highlights: [
        "Hypnotic blue waters with unmatched clarity",
        "Nature trails surrounding the spring",
        "Wildlife viewing opportunities",
        "Perfect photo opportunities",
        "Refreshing swimming experience (for the brave)"
      ]
    },
    {
      id: "kruje",
      name: "Krujë Castle & Old Bazaar",
      image: "https://images.unsplash.com/photo-1592309245211-98bb40899e8a?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1000",
      description: "Explore the historical center of Albanian resistance against the Ottoman Empire and shop for traditional crafts in the old market.",
      rating: 4.5,
      highlights: [
        "Skanderbeg Museum dedicated to Albania's national hero",
        "Traditional Ottoman-style bazaar",
        "Castle ruins with panoramic views",
        "Ethnographic Museum showcasing traditional life",
        "Handcrafted Albanian souvenirs and carpets"
      ]
    },
    {
      id: "shkoder",
      name: "Shkodër & Lake Shkodra",
      image: "https://images.unsplash.com/photo-1596466851542-4d37522bdb7d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1000",
      description: "Visit Albania's cultural capital and the largest lake in Southern Europe, offering beautiful scenery and rich biodiversity.",
      rating: 4.7,
      highlights: [
        "Rozafa Castle with panoramic views",
        "Marubi National Museum of Photography",
        "Lake Shkodra boat tours",
        "Cycling routes around the lake",
        "Historic Pedonale walking street"
      ]
    },
    {
      id: "tirana",
      name: "Tirana",
      image: "https://images.unsplash.com/photo-1605728463622-a14e23c6fde3?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1000",
      description: "Discover Albania's vibrant capital with its colorful buildings, museums, and bustling cafe culture reflecting the country's unique history.",
      rating: 4.5,
      highlights: [
        "Skanderbeg Square - the city's main plaza",
        "National History Museum",
        "Bunk'Art - Cold War bunker turned museum",
        "Et'hem Bey Mosque",
        "The Block (Blloku) area for restaurants and nightlife"
      ]
    }
  ];

  const featuredImages = [
    {
      url: "https://images.unsplash.com/photo-1592489261565-4959d7252a98?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1200",
      caption: "Berat - City of a Thousand Windows"
    },
    {
      url: "https://images.unsplash.com/photo-1606994868513-d91f28eaab33?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1200",
      caption: "Albanian Riviera"
    },
    {
      url: "https://images.unsplash.com/photo-1551854596-0aa248fc995b?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1200", 
      caption: "Theth National Park"
    },
    {
      url: "https://images.unsplash.com/photo-1559735614-edfc9fdf95fc?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1200",
      caption: "Butrint Archaeological Site"
    },
    {
      url: "https://images.unsplash.com/photo-1604082787517-e5e06d1ad537?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1200",
      caption: "Blue Eye Spring (Syri i Kaltër)"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-alba-50/30">
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-alba-950 leading-tight">
              Explore Albanian Treasures
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
              Discover Albania's most breathtaking destinations with our guided transportation services
            </p>
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="py-12 px-6 md:px-12 bg-alba-50/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-alba-950 mb-8 text-center">
            Featured Destinations
          </h2>
          
          <div className="relative mx-auto">
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {featuredImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-2/3 lg:basis-3/4">
                    <div className="p-1">
                      <div className="overflow-hidden rounded-xl shadow-lg">
                        <AspectRatio ratio={16/9} className="bg-muted">
                          <img
                            src={image.url}
                            alt={image.caption}
                            className="object-cover w-full h-full transition-all hover:scale-105 duration-700"
                          />
                        </AspectRatio>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 rounded-xl" />
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <h3 className="font-semibold text-xl md:text-2xl">{image.caption}</h3>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious className="left-2 bg-white/80 hover:bg-white" />
                <CarouselNext className="right-2 bg-white/80 hover:bg-white" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-alba-950 mb-8 text-center">
            All Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                id={destination.id}
                name={destination.name}
                image={destination.image}
                description={destination.description}
                rating={destination.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-12 bg-alba-50/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-alba-950 mb-6">
            Ready to Experience Albania?
          </h2>
          <p className="text-lg text-slate-700 mb-8">
            Contact us today to book your customized tour to any of these magnificent destinations
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-alba-700 hover:bg-alba-800 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300"
            >
              Book Now
            </a>
            <a 
              href="/services" 
              className="bg-white hover:bg-alba-50 text-alba-700 border border-alba-200 px-8 py-3 rounded-lg font-medium transition-colors duration-300"
            >
              View Packages
            </a>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-alba-950">
              Planning Resources
            </h2>
            <p className="mt-4 text-lg text-slate-700 max-w-2xl mx-auto">
              Useful links to help you prepare for your Albanian adventure
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <a 
              href="https://albania.al" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center"
            >
              <div className="flex-grow">
                <h3 className="font-semibold text-lg mb-1">Official Tourism Portal</h3>
                <p className="text-sm text-slate-600">Albania.al</p>
              </div>
              <ExternalLink size={18} className="text-alba-700 flex-shrink-0" />
            </a>

            <a 
              href="https://www.lonelyplanet.com/albania" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center"
            >
              <div className="flex-grow">
                <h3 className="font-semibold text-lg mb-1">Lonely Planet Guide</h3>
                <p className="text-sm text-slate-600">Travel information and tips</p>
              </div>
              <ExternalLink size={18} className="text-alba-700 flex-shrink-0" />
            </a>

            <a 
              href="https://www.wikitravel.org/en/Albania" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center"
            >
              <div className="flex-grow">
                <h3 className="font-semibold text-lg mb-1">WikiTravel Albania</h3>
                <p className="text-sm text-slate-600">Community travel guide</p>
              </div>
              <ExternalLink size={18} className="text-alba-700 flex-shrink-0" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Destinations;

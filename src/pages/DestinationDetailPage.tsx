
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import DestinationDetail from '@/components/DestinationDetail';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';

const DestinationDetailPage = () => {
  const { destinationId } = useParams<{ destinationId: string }>();
  const navigate = useNavigate();
  
  // This would typically come from an API or database
  const destinations = [
    {
      id: "berat",
      name: "Berat - City of a Thousand Windows",
      images: [
        "https://images.unsplash.com/photo-1592489261565-4959d7252a98?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1644159633320-52cf0ba82871?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1686395018842-83b5fe15c486?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1200"
      ],
      description: "Known as the 'City of a Thousand Windows,' Berat is one of Albania's most beautiful historic towns. The UNESCO-listed historic center features unique Ottoman architecture with rows of white Ottoman houses climbing up the hill to the castle. The town is divided by the Osum River with the Mangalem and Gorica districts on each side and the castle rising above.",
      highlights: [
        "UNESCO World Heritage Site",
        "Ottoman-era architecture",
        "Berat Castle with panoramic views",
        "Mangalem and Gorica historic quarters",
        "Onufri Museum with religious artifacts"
      ],
      rating: 4.8
    },
    {
      id: "albanian-riviera",
      name: "Albanian Riviera",
      images: [
        "https://images.unsplash.com/photo-1606994868513-d91f28eaab33?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1692020223285-27d84fca3307?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1523538290088-e366f338373e?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1200"
      ],
      description: "The Albanian Riviera offers some of the most stunning coastal scenery in the Mediterranean. Stretching from Vlora to Saranda, this coastal stretch features crystal-clear turquoise waters, secluded bays, and pristine beaches set against a backdrop of mountains. The area is dotted with charming villages and offers everything from relaxed beach days to vibrant nightlife.",
      highlights: [
        "Ksamil Islands with white sandy beaches",
        "Dhermi's vibrant beach scene",
        "Gjipe Beach - a hidden paradise",
        "Porto Palermo Castle",
        "Llogara National Park with spectacular views"
      ],
      rating: 4.9
    },
    {
      id: "theth",
      name: "Theth National Park",
      images: [
        "https://images.unsplash.com/photo-1551854596-0aa248fc995b?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1596997000103-e036a3fea61b?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1596997000001-25f06aa51681?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1200"
      ],
      description: "Theth National Park is a paradise for nature lovers and hikers. This remote mountain village in the heart of the Albanian Alps (Accursed Mountains) features stunning landscapes with dramatic peaks, waterfalls, and traditional stone houses. The famous Theth to Valbona hike is one of the most spectacular treks in the Balkans, taking you through pristine alpine landscapes.",
      highlights: [
        "Blue Eye waterfall",
        "Hiking to Valbona Pass",
        "Traditional Albanian stone houses",
        "Grunas Waterfall",
        "Lock-in Tower (Kulla)"
      ],
      rating: 4.7
    },
    {
      id: "butrint",
      name: "Butrint Archaeological Site",
      images: [
        "https://images.unsplash.com/photo-1559735614-edfc9fdf95fc?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1559735619-42bf94e36d30?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1559735541-6a4ea384e7a3?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1200"
      ],
      description: "Butrint is Albania's most important archaeological site and a UNESCO World Heritage site. Located on a hill within a lake connected to the sea by a narrow channel, this ancient city has been inhabited since prehistoric times. The site features ruins from Greek, Roman, Byzantine, and Venetian periods, all surrounded by a beautiful natural setting in Butrint National Park.",
      highlights: [
        "Ancient Greek Theater",
        "Roman Forum",
        "Byzantine Baptistery with mosaics", 
        "Venetian Tower",
        "Museum of archaeological findings"
      ],
      rating: 4.8
    },
    {
      id: "gjirokaster",
      name: "Gjirokastër",
      images: [
        "https://images.unsplash.com/photo-1600093112524-288811dd24c0?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1600092776013-cdc1feef626f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1600093111590-9e0b26cf87ff?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1200"
      ],
      description: "Gjirokastër, known as the 'City of Stone,' is a UNESCO-protected Ottoman mountain town with unique architecture. The city is built on the slopes of the Drino Valley and is dominated by its imposing castle. Gjirokastër's well-preserved Ottoman houses with their stone roofs, wooden balconies, and tall chimneys create a spectacular medieval atmosphere.",
      highlights: [
        "Gjirokastër Castle with panoramic views",
        "Ethnographic Museum (Enver Hoxha's birthplace)",
        "Traditional Ottoman houses",
        "Bazaar of Gjirokastër",
        "Zekate House - finest example of Ottoman architecture"
      ],
      rating: 4.6
    },
    {
      id: "blue-eye",
      name: "Blue Eye Spring (Syri i Kaltër)",
      images: [
        "https://images.unsplash.com/photo-1604082787517-e5e06d1ad537?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1671642650972-26614f1269b6?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1671642657480-55ac6d9fcaca?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1200"
      ],
      description: "Blue Eye Spring is a natural phenomenon and one of Albania's most enchanting natural attractions. It's a water spring where crystal clear water bubbles up from more than 50 meters deep, creating mesmerizing shades of blue in the center that resemble an eye. The spring is surrounded by lush vegetation and is part of a natural park with oak and sycamore trees.",
      highlights: [
        "Hypnotic blue waters with unmatched clarity",
        "Nature trails surrounding the spring",
        "Wildlife viewing opportunities",
        "Perfect photo opportunities",
        "Refreshing swimming experience (for the brave)"
      ],
      rating: 4.9
    },
    {
      id: "kruje",
      name: "Krujë Castle & Old Bazaar",
      images: [
        "https://images.unsplash.com/photo-1592309245211-98bb40899e8a?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1601141405854-404400f6e5a8?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1592309323237-b01530a2ed05?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1200"
      ],
      description: "Krujë was the center of Albanian resistance against the Ottoman Empire under national hero Skanderbeg. The small town is dominated by a restored castle that houses the Skanderbeg Museum, dedicated to the 15th-century hero. Below the castle lies the old bazaar, a cobblestone street lined with traditional wooden shops selling authentic Albanian crafts, souvenirs, antiques, and carpets.",
      highlights: [
        "Skanderbeg Museum dedicated to Albania's national hero",
        "Traditional Ottoman-style bazaar",
        "Castle ruins with panoramic views",
        "Ethnographic Museum showcasing traditional life",
        "Handcrafted Albanian souvenirs and carpets"
      ],
      rating: 4.5
    },
    {
      id: "shkoder",
      name: "Shkodër & Lake Shkodra",
      images: [
        "https://images.unsplash.com/photo-1596466851542-4d37522bdb7d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1596467746663-97171c270da0?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1200"
      ],
      description: "Shkodër is one of Albania's oldest and most historic towns, known as the cultural capital of the country. It sits alongside Lake Shkodra, the largest lake in Southern Europe, shared between Albania and Montenegro. The city offers a blend of cultural heritage, with the impressive Rozafa Castle overlooking the lake, and natural beauty with excellent opportunities for boating, cycling, and birdwatching.",
      highlights: [
        "Rozafa Castle with panoramic views",
        "Marubi National Museum of Photography",
        "Lake Shkodra boat tours",
        "Cycling routes around the lake",
        "Historic Pedonale walking street"
      ],
      rating: 4.7
    },
    {
      id: "tirana",
      name: "Tirana",
      images: [
        "https://images.unsplash.com/photo-1605728463622-a14e23c6fde3?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1649502981241-e0625735d4f0?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1579613744486-55fbed66bde6?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1200"
      ],
      description: "Tirana, Albania's vibrant capital, showcases the country's unique history and forward-looking attitude. Once filled with gray communist-era buildings, the city has been transformed with colorful painted facades, modern architecture, and lively public spaces. Tirana offers fascinating museums, Ottoman and Italian influences, bustling markets, and a thriving cafe culture that spills onto the sidewalks.",
      highlights: [
        "Skanderbeg Square - the city's main plaza",
        "National History Museum",
        "Bunk'Art - Cold War bunker turned museum",
        "Et'hem Bey Mosque",
        "The Block (Blloku) area for restaurants and nightlife"
      ],
      rating: 4.5
    }
  ];
  
  const destination = destinations.find(d => d.id === destinationId);
  
  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold mb-4">Destination not found</h2>
          <Button 
            onClick={() => navigate('/destinations')}
            variant="outline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to all destinations
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-white">
      <div className="container py-12 px-4 sm:px-6 lg:px-8">
        <Button 
          onClick={() => navigate('/destinations')}
          variant="outline"
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to all destinations
        </Button>
        
        <DestinationDetail
          name={destination.name}
          images={destination.images}
          description={destination.description}
          highlights={destination.highlights}
          rating={destination.rating}
        />
        
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            onClick={() => navigate('/contact')}
            size="lg"
            className="bg-alba-700 hover:bg-alba-800 w-full sm:w-auto"
          >
            Book a tour
          </Button>
          <Button 
            onClick={() => navigate('/services')}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
          >
            View tour packages
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DestinationDetailPage;


import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface DestinationDetailProps {
  name: string;
  images: string[];
  description: string;
  highlights: string[];
  rating: number;
}

const DestinationDetail = ({
  name,
  images,
  description,
  highlights,
  rating
}: DestinationDetailProps) => {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-alba-950 mb-6">
        {name}
      </h2>
      
      {/* Images Carousel */}
      <Carousel className="w-full mb-8">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <AspectRatio ratio={16/9} className="bg-muted rounded-xl overflow-hidden">
                <img
                  src={image}
                  alt={`${name} - Image ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
      
      {/* Description Card */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>{name}</CardTitle>
            <div className="bg-alba-50 px-3 py-1 rounded-full flex items-center">
              <svg className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-medium">{rating}</span>
            </div>
          </div>
          <CardDescription>
            Experience the beauty of Albania
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-slate-700">{description}</p>
          
          {highlights.length > 0 && (
            <div className="mt-6">
              <h4 className="font-semibold text-lg mb-2">Highlights</h4>
              <ul className="list-disc pl-5 space-y-1">
                {highlights.map((highlight, index) => (
                  <li key={index} className="text-slate-700">{highlight}</li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DestinationDetail;

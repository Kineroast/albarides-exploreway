
import { cn } from '@/lib/utils';

interface DestinationCardProps {
  name: string;
  image: string;
  description: string;
  rating?: number;
  className?: string;
  onClick?: () => void;
}

const DestinationCard = ({
  name,
  image,
  description,
  rating = 4.5,
  className,
  onClick,
}: DestinationCardProps) => {
  return (
    <div 
      className={cn(
        "overflow-hidden rounded-2xl shadow-md group cursor-pointer h-full flex flex-col",
        className
      )}
      onClick={onClick}
    >
      {/* Image Container with Overlay */}
      <div className="relative overflow-hidden h-56">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
        
        {/* Rating Badge */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center text-sm font-medium text-slate-900">
          <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {rating}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 bg-white flex-grow flex flex-col">
        <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-alba-700 transition-colors">
          {name}
        </h3>
        
        <p className="text-slate-600 text-sm flex-grow">
          {description}
        </p>
        
        <div className="mt-4 pt-2 flex justify-between items-center">
          <span className="text-alba-700 font-medium group-hover:text-alba-900 transition-colors">
            Discover more
          </span>
          
          <svg 
            className="w-5 h-5 text-alba-700 transform group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;

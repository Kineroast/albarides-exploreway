
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

const ServiceCard = ({ title, description, icon: Icon, className }: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card rounded-2xl p-8 group hover:shadow-xl transition-all duration-300 h-full flex flex-col",
        className
      )}
    >
      <div className="mb-6 bg-alba-50 p-4 rounded-lg w-16 h-16 flex items-center justify-center text-alba-700 group-hover:bg-alba-100 transition-colors duration-300">
        <Icon size={28} className="group-hover:scale-110 transition-transform duration-300" />
      </div>
      
      <h3 className="text-xl font-semibold mb-3 group-hover:text-alba-700 transition-colors">
        {title}
      </h3>
      
      <p className="text-slate-600 flex-grow">
        {description}
      </p>
      
      <div className="mt-6 pt-2">
        <a 
          href="#" 
          className="text-alba-700 font-medium flex items-center text-sm hover:text-alba-900 transition-colors"
        >
          Learn more
          <svg 
            className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;

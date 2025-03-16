
import { cn } from '@/lib/utils';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  overlayOpacity?: string;
  buttonText?: string;
  buttonLink?: string;
  height?: string;
  contentPosition?: 'center' | 'left' | 'right';
  className?: string;
}

const Hero = ({
  title,
  subtitle,
  backgroundImage,
  overlayOpacity = 'bg-black/40',
  buttonText,
  buttonLink = '#',
  height = 'h-screen',
  contentPosition = 'center',
  className,
}: HeroProps) => {
  const positionClasses = {
    center: 'text-center items-center justify-center',
    left: 'text-left items-center justify-start',
    right: 'text-right items-center justify-end',
  };

  return (
    <section
      className={cn(
        'relative flex flex-col w-full overflow-hidden',
        height,
        className
      )}
    >
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-10000"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          transformOrigin: 'center center'
        }}
      />
      
      {/* Overlay */}
      <div className={cn('absolute inset-0', overlayOpacity)} />
      
      {/* Content */}
      <div className={cn(
        'relative flex flex-col w-full h-full px-6 md:px-12',
        positionClasses[contentPosition]
      )}>
        <div className={cn(
          'max-w-4xl transition-all duration-700 animate-fade-in',
          contentPosition === 'center' ? 'mx-auto' : '',
          contentPosition === 'left' ? 'ml-0 mr-auto' : '',
          contentPosition === 'right' ? 'mr-0 ml-auto' : '',
          'px-4 md:px-0'
        )}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-8">
              {subtitle}
            </p>
          )}
          
          {buttonText && (
            <a
              href={buttonLink}
              className="inline-block bg-white text-slate-900 hover:bg-slate-100 transition-colors font-semibold py-3 px-8 rounded-md shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
            >
              {buttonText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;


import { useState } from 'react';
import { Calendar, Clock, Users, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BookingFormProps {
  className?: string;
  onFormSubmit?: (formData: any) => void;
  compact?: boolean;
}

const BookingForm = ({ className, onFormSubmit, compact = false }: BookingFormProps) => {
  const [formData, setFormData] = useState({
    pickup: '',
    destination: '',
    date: '',
    time: '',
    passengers: '1',
    name: '',
    email: '',
    phone: '',
    notes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onFormSubmit) {
      onFormSubmit(formData);
    } else {
      console.log('Form submitted:', formData);
      // Here you would typically send the data to your backend
      alert('Booking request received! We will contact you shortly.');
      
      // Reset form
      setFormData({
        pickup: '',
        destination: '',
        date: '',
        time: '',
        passengers: '1',
        name: '',
        email: '',
        phone: '',
        notes: '',
      });
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={cn(
        "glass-card rounded-2xl p-6 md:p-8",
        className
      )}
    >
      <h3 className={cn(
        "font-semibold text-slate-900 mb-6",
        compact ? "text-lg" : "text-2xl"
      )}>
        Book Your Ride
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Pickup Location */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-slate-700 mb-1">Pickup Location</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MapPin size={18} className="text-slate-400" />
            </div>
            <input
              type="text"
              name="pickup"
              value={formData.pickup}
              onChange={handleChange}
              placeholder="Your pickup address"
              required
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-alba-500 focus:border-transparent transition-all"
            />
          </div>
        </div>
        
        {/* Destination */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-slate-700 mb-1">Destination</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MapPin size={18} className="text-slate-400" />
            </div>
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="Where are you going?"
              required
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-alba-500 focus:border-transparent transition-all"
            />
          </div>
        </div>
        
        {/* Date */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-slate-700 mb-1">Date</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar size={18} className="text-slate-400" />
            </div>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-alba-500 focus:border-transparent transition-all"
            />
          </div>
        </div>
        
        {/* Time */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-slate-700 mb-1">Time</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Clock size={18} className="text-slate-400" />
            </div>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-alba-500 focus:border-transparent transition-all"
            />
          </div>
        </div>
        
        {/* Passengers */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-slate-700 mb-1">Passengers</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Users size={18} className="text-slate-400" />
            </div>
            <select
              name="passengers"
              value={formData.passengers}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-md appearance-none focus:ring-2 focus:ring-alba-500 focus:border-transparent transition-all"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                <option key={num} value={num.toString()}>{num} {num === 1 ? 'passenger' : 'passengers'}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-slate-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        
        {!compact && (
          <>
            {/* Name */}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full name"
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-alba-500 focus:border-transparent transition-all"
              />
            </div>
            
            {/* Email */}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-alba-500 focus:border-transparent transition-all"
              />
            </div>
            
            {/* Phone */}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Contact number"
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-alba-500 focus:border-transparent transition-all"
              />
            </div>
            
            {/* Special Requests */}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-slate-700 mb-1">Special Requests</label>
              <input
                type="text"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Any special requirements"
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-alba-500 focus:border-transparent transition-all"
              />
            </div>
          </>
        )}
      </div>
      
      {/* Submit Button */}
      <div className={cn("mt-6", compact ? "text-center" : "")}>
        <button
          type="submit"
          className="w-full sm:w-auto bg-alba-700 hover:bg-alba-800 text-white font-medium py-2 px-6 rounded-md shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          {compact ? "Check Availability" : "Book Now"}
        </button>
        
        {compact && (
          <p className="text-xs text-slate-500 mt-2">
            No credit card required. You'll receive a confirmation email.
          </p>
        )}
      </div>
    </form>
  );
};

export default BookingForm;

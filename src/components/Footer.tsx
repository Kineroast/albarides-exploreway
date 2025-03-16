
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold tracking-tight">AlbaRides</h3>
            <p className="text-slate-300 max-w-xs">
              Premium transportation services to tourist attractions across the region.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-slate-300 hover:text-alba-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-alba-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-alba-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-slate-300 hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="text-slate-300 hover:text-white transition-colors">About Us</Link>
              <Link to="/services" className="text-slate-300 hover:text-white transition-colors">Our Services</Link>
              <Link to="/destinations" className="text-slate-300 hover:text-white transition-colors">Destinations</Link>
              <Link to="/contact" className="text-slate-300 hover:text-white transition-colors">Book a Ride</Link>
            </nav>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Popular Destinations</h4>
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-slate-300 hover:text-white transition-colors">City Center</a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">Historic District</a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">National Park</a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">Beach Resort</a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">Mountain Viewpoint</a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-alba-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300">123 Travel Street, Tourism City, Country</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-alba-400 flex-shrink-0" />
                <span className="text-slate-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-alba-400 flex-shrink-0" />
                <span className="text-slate-300">info@albarides.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-slate-800 text-center sm:text-left sm:flex sm:justify-between sm:items-center">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} AlbaRides. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0">
            <nav className="flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

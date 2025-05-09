
import React from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, MessageSquare } from 'lucide-react';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-alba-50/30">
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-alba-950 leading-tight">
              Contact Us
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
              Get in touch to book your Albanian adventure or inquire about our services
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-display font-bold text-alba-950 mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-alba-100 p-3 rounded-lg text-alba-700">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Office Location</h3>
                    <p className="text-slate-700">
                      Rruga Ismail Qemali, Nr. 27<br />
                      Tirana, 1001<br />
                      Albania
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-alba-100 p-3 rounded-lg text-alba-700">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Phone Numbers</h3>
                    <p className="text-slate-700 mb-2">
                      <span className="font-medium">Main Office:</span> +355 42 235 638
                    </p>
                    <p className="text-slate-700 mb-2">
                      <span className="font-medium">Bookings:</span> +355 69 876 5432
                    </p>
                    <p className="text-slate-700">
                      <span className="font-medium">Customer Support:</span> +355 69 123 4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-alba-100 p-3 rounded-lg text-alba-700">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email Addresses</h3>
                    <p className="text-slate-700 mb-2">
                      <span className="font-medium">General Inquiries:</span> info@albarides.com
                    </p>
                    <p className="text-slate-700 mb-2">
                      <span className="font-medium">Bookings:</span> bookings@albarides.com
                    </p>
                    <p className="text-slate-700">
                      <span className="font-medium">Support:</span> support@albarides.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-alba-100 p-3 rounded-lg text-alba-700">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
                    <p className="text-slate-700 mb-2">
                      <span className="font-medium">Monday - Friday:</span> 8:00 AM - 8:00 PM
                    </p>
                    <p className="text-slate-700 mb-2">
                      <span className="font-medium">Saturday:</span> 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-slate-700">
                      <span className="font-medium">Sunday:</span> 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-display font-bold text-alba-950 mb-6">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-alba-700 text-white p-3 rounded-full hover:bg-alba-800 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="bg-alba-700 text-white p-3 rounded-full hover:bg-alba-800 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="bg-alba-700 text-white p-3 rounded-full hover:bg-alba-800 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Booking Form */}
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-2xl shadow-md p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Calendar className="text-alba-700" size={24} />
                  <h2 className="text-2xl font-display font-bold text-alba-950">
                    Book Your Ride
                  </h2>
                </div>
                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-6 md:px-12 bg-alba-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-alba-950">
              Find Us
            </h2>
            <p className="mt-4 text-lg text-slate-700">
              Visit our office in central Tirana
            </p>
          </div>
          
          <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.1901257350787!2d19.81803857673969!3d41.32733200261603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13503102f461356f%3A0x829c823bd86ba792!2zVGlyYW7DqywgQWxiYW5pYQ!5e0!3m2!1sen!2sus!4v1700513174084!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center space-x-3 mb-4">
              <MessageSquare className="text-alba-700" size={24} />
              <h2 className="text-3xl font-display font-bold text-alba-950">
                Frequently Asked Questions
              </h2>
            </div>
            <p className="text-lg text-slate-700">
              Common questions about our transportation services
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">How far in advance should I book?</h3>
              <p className="text-slate-700">We recommend booking at least 48 hours in advance to ensure availability, especially during peak tourist season (June-September).</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-slate-700">We accept credit/debit cards, PayPal, bank transfers, and cash payments for our services.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Do your drivers speak English?</h3>
              <p className="text-slate-700">Yes, all our drivers speak English and many are also fluent in Italian, German, or other languages.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Can I customize my tour?</h3>
              <p className="text-slate-700">Absolutely! We specialize in custom tours. Contact us with your preferences and we'll create a personalized itinerary.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

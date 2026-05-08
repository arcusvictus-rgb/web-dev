import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-black text-white border-t-2 border-black">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img
                src="https://horizons-cdn.hostinger.com/245c0052-f696-4e08-b2f4-5856085fd0c3/bb0cfd7197054be658d983047ef529f7.jpg"
                alt="Brinda Clinic"
                className="h-16 w-auto rounded-md bg-white p-1"
              />
              <span className="text-xl font-bold uppercase tracking-tight">Brinda Clinic</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-300">
              Your trusted healthcare partner in Andaman and Nicobar Islands, providing quality medical care with uncompromising standards.
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-sm font-bold tracking-widest uppercase text-gray-400">Location</span>
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <p className="text-sm leading-relaxed text-gray-300">
                Aarav Square, Opposite Govt. Medical<br />
                Garacharama, Sri Vijaya Puram<br />
                Andaman and Nicobar Islands 744105
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-sm font-bold tracking-widest uppercase text-gray-400">Contact</span>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+919476021494" className="text-sm text-gray-300 hover:text-white transition-colors">
                  +91 94760 21494
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:info@brindaclinic.com" className="text-sm text-gray-300 hover:text-white transition-colors">
                  info@brindaclinic.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-sm font-bold tracking-widest uppercase text-gray-400">Quick links</span>
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-sm text-gray-300 hover:text-white transition-colors rounded-sm focus-visible:ring-2 focus-visible:ring-white">
                Home
              </Link>
              <Link to="/about" className="text-sm text-gray-300 hover:text-white transition-colors rounded-sm focus-visible:ring-2 focus-visible:ring-white">
                About us
              </Link>
              <Link to="/services" className="text-sm text-gray-300 hover:text-white transition-colors rounded-sm focus-visible:ring-2 focus-visible:ring-white">
                Services
              </Link>
              <Link to="/contact" className="text-sm text-gray-300 hover:text-white transition-colors rounded-sm focus-visible:ring-2 focus-visible:ring-white">
                Contact
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Brinda Clinic. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors rounded-sm focus-visible:ring-2 focus-visible:ring-white">
                Privacy policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors rounded-sm focus-visible:ring-2 focus-visible:ring-white">
                Terms of service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

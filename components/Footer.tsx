
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MapPin, Phone, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] pt-20 pb-10 text-gray-400 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* Brand Section */}
        <div className="space-y-6">
          <Link to="/" className="inline-block">
            <h2 className="text-3xl font-bold tracking-tighter text-white">
              M7<span className="text-amber-500 font-serif italic font-normal">BARBER</span>
            </h2>
          </Link>
          <p className="text-sm leading-relaxed max-w-xs">
            Premium grooming for the modern gentleman. Committed to craftsmanship, community, and the perfect cut in the heart of Holt, ACT.
          </p>
          <div className="flex space-x-4">
            <a href={BUSINESS_INFO.instagram} target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-amber-600 p-3 rounded-full transition-all text-white transform hover:scale-110">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h3 className="text-white font-bold uppercase tracking-widest text-sm">Navigation</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/services" className="hover:text-amber-500 transition-colors">Grooming Services</Link></li>
            <li><Link to="/about" className="hover:text-amber-500 transition-colors">The Brand Story</Link></li>
            <li><Link to="/gallery" className="hover:text-amber-500 transition-colors">Visual Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-amber-500 transition-colors">Location & Hours</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="text-white font-bold uppercase tracking-widest text-sm">Get In Touch</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-amber-500 shrink-0" />
              <span>{BUSINESS_INFO.address}</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-amber-500 shrink-0" />
              <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white transition-colors">{BUSINESS_INFO.phone}</a>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div className="space-y-6">
          <h3 className="text-white font-bold uppercase tracking-widest text-sm">Trading Hours</h3>
          <div className="space-y-2 text-xs">
            {BUSINESS_INFO.hours.slice(0, 5).map(h => (
              <div key={h.day} className="flex justify-between border-b border-white/5 pb-1">
                <span>{h.day}</span>
                <span className="text-gray-300 font-medium">{h.hours}</span>
              </div>
            ))}
             {BUSINESS_INFO.hours.slice(5).map(h => (
              <div key={h.day} className="flex justify-between border-b border-white/5 pb-1 text-amber-500/80">
                <span>{h.day}</span>
                <span className="font-medium">{h.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} M7 Barber Kippax. All Rights Reserved.</p>
        <p>Design by Premium Grooming Solutions</p>
      </div>
    </footer>
  );
};

export default Footer;

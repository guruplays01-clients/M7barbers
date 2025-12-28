
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 py-3 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link to="/" className="group" onClick={() => setIsOpen(false)}>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tighter text-white group-hover:text-amber-500 transition-colors">
            M7<span className="text-amber-500 font-serif italic font-normal">BARBER</span>
          </h1>
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 -mt-1 group-hover:text-gray-200 transition-colors">Kippax / Canberra</p>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium uppercase tracking-widest transition-colors hover:text-amber-500 ${
                  location.pathname === link.path ? 'text-amber-500' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center space-x-4 ml-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="text-gray-300 hover:text-amber-500 transition-colors p-2"
              title="Call Us"
            >
              <Phone size={20} />
            </a>
            <Link
              to="/contact"
              className="flex items-center space-x-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-sm transition-all transform hover:-translate-y-0.5 shadow-lg shadow-amber-600/20 active:scale-95"
            >
              <Calendar size={16} />
              <span className="text-xs font-bold uppercase tracking-widest">Book Online</span>
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <Link
            to="/contact"
            className="bg-amber-600 text-white p-2.5 rounded-sm shadow-lg active:scale-95"
            onClick={() => setIsOpen(false)}
          >
            <Calendar size={20} />
          </Link>
          <button 
            className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/98 z-40 transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-2xl font-serif tracking-widest ${location.pathname === link.path ? 'text-amber-500 underline' : 'text-white'}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          
          <Link
            to="/contact"
            className="bg-amber-600 text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-sm shadow-xl mt-4"
            onClick={() => setIsOpen(false)}
          >
            Book Online Now
          </Link>

          <div className="flex flex-col items-center space-y-6 pt-10 border-t border-white/10 w-2/3">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="text-gray-400 text-lg tracking-widest flex items-center space-x-2 hover:text-amber-500 transition-colors">
              <Phone size={18} />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <div className="flex space-x-6">
              <a href={BUSINESS_INFO.instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-500 transition-colors">
                <Instagram size={32} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

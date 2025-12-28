
import React from 'react';
import { SERVICES, BUSINESS_INFO } from '../constants';
import { ChevronRight, Phone } from 'lucide-react';
import Reveal from '../components/Reveal';

const Services: React.FC = () => {
  return (
    <div className="pt-24 lg:pt-32">
      <section className="bg-black py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <Reveal>
            <p className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4">The Grooming Menu</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter font-serif">Premium Services</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
              Each service is tailored to your unique features. We use only the finest tools and products to ensure a sharp, long-lasting finish.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            {SERVICES.map((s, idx) => (
              <Reveal key={s.id} delay={idx * 100} className="group flex flex-col md:flex-row md:items-center justify-between border-b border-white/5 pb-12 transition-all hover:translate-x-2">
                <div className="md:max-w-xl">
                  <span className="text-amber-500 text-[10px] uppercase tracking-[0.3em] font-bold mb-2 block">{s.category}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-amber-500 transition-colors">{s.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">{s.description}</p>
                </div>
                <div className="mt-6 md:mt-0">
                  <ChevronRight className="text-white/20 group-hover:text-amber-500 hidden md:block" size={32} />
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-24 p-12 bg-black border border-amber-500/20 text-center rounded-sm">
             <h4 className="text-2xl font-bold text-white mb-4">Walk-ins vs Appointments</h4>
             <p className="text-gray-400 mb-8 max-w-lg mx-auto">
               We welcome walk-ins when available, but to avoid wait times and guarantee your favorite barber, we highly recommend booking in advance.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center justify-center space-x-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-xs transition-all">
                  <Phone size={16} />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>
             </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Services;

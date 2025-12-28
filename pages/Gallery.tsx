
import React from 'react';
import { GALLERY_ITEMS, BUSINESS_INFO } from '../constants';
import { Instagram, Maximize2 } from 'lucide-react';
import Reveal from '../components/Reveal';

const Gallery: React.FC = () => {
  return (
    <div className="pt-24 lg:pt-32">
      <section className="bg-black py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <Reveal>
            <p className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4">Visual Portfolio</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter font-serif">The Craft Gallery</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A showcase of our recent work. Precision fades, sharp beards, and the M7 lifestyle in action.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {GALLERY_ITEMS.map((item, idx) => (
              <Reveal key={item.id} delay={idx * 100} className="group relative overflow-hidden aspect-square bg-black border border-white/5 rounded-sm cursor-pointer">
                {/* Image with subtle scale and dimming on hover */}
                <img 
                  src={item.url} 
                  alt={item.caption} 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-40"
                />
                
                {/* Overlay with color transition and content animation */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center transition-all duration-500 bg-transparent group-hover:bg-black/20">
                   <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                     <Maximize2 className="text-amber-500 mx-auto mb-4" size={28} />
                     <p className="text-white font-bold uppercase tracking-[0.2em] text-xs md:text-sm drop-shadow-lg">
                       {item.caption}
                     </p>
                     <div className="w-10 h-0.5 bg-amber-500 mx-auto mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
                   </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-24 text-center">
             <p className="text-gray-400 mb-8 italic">Follow us on Instagram for daily updates and the latest style trends.</p>
             <a 
               href={BUSINESS_INFO.instagram} 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-flex items-center space-x-3 text-amber-500 font-bold uppercase tracking-widest hover:text-white transition-colors border border-amber-500/30 px-8 py-4 hover:bg-amber-600/10 rounded-sm"
             >
               <Instagram size={20} />
               <span>@m7_barbers</span>
             </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Gallery;


import React from 'react';
import { Scissors, Coffee, Award } from 'lucide-react';
import Reveal from '../components/Reveal';

const About: React.FC = () => {
  return (
    <div className="pt-24 lg:pt-32">
      {/* Header */}
      <section className="bg-black py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <Reveal>
            <p className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4">The Brand Story</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter italic font-serif">Crafting Excellence.</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              M7 Barber Kippax was born from a simple vision: to provide the men of the ACT region with a grooming experience that bridges the gap between old-world tradition and contemporary flair.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal className="space-y-8">
              <h2 className="text-3xl font-bold text-white">More Than Just a Haircut</h2>
              <p className="text-gray-400 leading-relaxed">
                At M7, we believe that grooming is a ritual. It’s that half-hour where you can switch off from the world, relax in a premium leather chair, and leave feeling sharper than when you arrived. 
              </p>
              <p className="text-gray-400 leading-relaxed">
                Our shop in Kippax has become a hub for locals who value precision. Whether it's a meticulously blended skin fade or a traditional hot towel shave, we take the time to get every detail right. We don't do "quick and easy"—we do quality.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                <div className="flex space-x-4">
                   <div className="bg-amber-600/10 p-4 rounded-sm h-fit">
                    <Scissors className="text-amber-500" size={24} />
                   </div>
                   <div>
                     <h3 className="text-white font-bold mb-2">Master Tools</h3>
                     <p className="text-gray-500 text-sm">We use top-tier equipment and surgical-grade blades for absolute precision.</p>
                   </div>
                </div>
                <div className="flex space-x-4">
                   <div className="bg-amber-600/10 p-4 rounded-sm h-fit">
                    <Coffee className="text-amber-500" size={24} />
                   </div>
                   <div>
                     <h3 className="text-white font-bold mb-2">Social Vibe</h3>
                     <p className="text-gray-500 text-sm">A welcoming atmosphere where conversation flows as freely as the craftsmanship.</p>
                   </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={300} className="relative group">
              <div className="absolute -inset-4 border border-amber-500/20 rounded-sm -z-10 group-hover:inset-0 transition-all duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1593702295094-ada35507967c?q=80&w=1470&auto=format&fit=crop" 
                alt="Barber working" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
           <Reveal delay={100} className="space-y-6">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto shadow-lg shadow-amber-600/20">
                <Award size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white">Precision</h3>
              <p className="text-gray-500 text-sm leading-relaxed">We obsessive over the millimeter. If it’s not perfect, it’s not M7.</p>
           </Reveal>
           <Reveal delay={200} className="space-y-6">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto shadow-lg shadow-amber-600/20">
                <Award size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white">Integrity</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Honest advice on styles that suit your face shape and hair type.</p>
           </Reveal>
           <Reveal delay={300} className="space-y-6">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto shadow-lg shadow-amber-600/20">
                <Award size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white">Community</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Proudly serving Holt and the greater Canberra region for years.</p>
           </Reveal>
        </div>
      </section>
    </div>
  );
};

export default About;

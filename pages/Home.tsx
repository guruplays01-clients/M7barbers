
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Star, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { BUSINESS_INFO, REVIEWS, SERVICES } from '../constants';
import Reveal from '../components/Reveal';

const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate parallax offset - subtle movement (20% of scroll)
  const parallaxOffset = scrollY * 0.2;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{ 
            transform: `translate3d(0, ${parallaxOffset}px, 0)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop" 
            alt="Barber Shop Interior" 
            className="w-full h-[120%] object-cover opacity-40 scale-110"
            style={{ objectPosition: 'center 30%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <Reveal delay={200}>
            <p className="text-amber-500 uppercase tracking-[0.5em] text-xs md:text-sm font-bold mb-6 animate-pulse">Holt's Premier Grooming Destination</p>
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-tight">
              Precision Grooming.<br/><span className="italic font-serif font-normal text-amber-400">Timeless Style.</span>
            </h1>
          </Reveal>
          <Reveal delay={400}>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Experience the gold standard in men's barbering. At M7 Barber Kippax, we combine classic techniques with modern precision to redefine your look.
            </p>
          </Reveal>
          <Reveal delay={600}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-sm transition-all shadow-2xl hover:shadow-amber-500/20 active:scale-95"
              >
                Book Your Chair
              </Link>
              <a 
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full sm:w-auto border border-white/20 hover:border-amber-500/50 hover:bg-white/5 text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-sm transition-all"
              >
                Call to Enquire
              </a>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
           <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
           </div>
        </div>
      </section>

      {/* Brand Ethos */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            <Reveal className="lg:col-span-1">
              <h2 className="text-amber-500 font-serif italic text-3xl mb-4">The M7 Standard</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">Craftsmanship Without Compromise</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Located in the Kippax shopping precinct, M7 is more than a barber shop. It's a sanctuary for the modern man who values precision, quality, and community.
              </p>
            </Reveal>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              <Reveal delay={100} className="p-8 border border-white/5 bg-[#0a0a0a] hover:border-amber-500/30 transition-all group hover-lift">
                <Scissors className="text-amber-500 mb-6 group-hover:rotate-12 transition-transform" size={32} />
                <h4 className="text-xl font-bold text-white mb-4">Expert Barbers</h4>
                <p className="text-gray-400 text-sm">Our team consists of industry veterans who specialize in all hair types and the latest global trends.</p>
              </Reveal>
              <Reveal delay={200} className="p-8 border border-white/5 bg-[#0a0a0a] hover:border-amber-500/30 transition-all group hover-lift">
                <ShieldCheck className="text-amber-500 mb-6" size={32} />
                <h4 className="text-xl font-bold text-white mb-4">Premium Products</h4>
                <p className="text-gray-400 text-sm">We exclusively use high-performance pomades, oils, and skincare to ensure your hair stays healthy.</p>
              </Reveal>
              <Reveal delay={300} className="p-8 border border-white/5 bg-[#0a0a0a] hover:border-amber-500/30 transition-all group hover-lift">
                <Zap className="text-amber-500 mb-6" size={32} />
                <h4 className="text-xl font-bold text-white mb-4">Modern Aesthetic</h4>
                <p className="text-gray-400 text-sm">Step into a space designed for comfort and style. From the chairs to the music, everything is curated.</p>
              </Reveal>
              <Reveal delay={400} className="p-8 border border-white/5 bg-[#0a0a0a] hover:border-amber-500/30 transition-all group hover-lift">
                <Star className="text-amber-500 mb-6" size={32} />
                <h4 className="text-xl font-bold text-white mb-4">Community Focused</h4>
                <p className="text-gray-400 text-sm">A local favorite in the Holt community. We treat every client like a VIP from the moment they walk in.</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Teaser */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Reveal className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-4 md:space-y-0">
            <div>
              <p className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4">What We Do Best</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Elevated Grooming</h2>
            </div>
            <Link to="/services" className="text-amber-500 font-bold uppercase tracking-widest text-sm flex items-center space-x-2 hover:translate-x-2 transition-transform">
              <span>View All Services</span>
              <ArrowRight size={18} />
            </Link>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((s, idx) => (
              <Reveal key={s.id} delay={idx * 150} className="relative aspect-[3/4] group overflow-hidden bg-black hover-lift">
                <img 
                  src={`https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1288&auto=format&fit=crop`} 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" 
                  alt={s.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <span className="text-amber-500 text-[10px] uppercase tracking-widest font-bold border border-amber-500/30 px-2 py-1 mb-4 inline-block">{s.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-gray-300 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity">{s.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Reveal className="text-center mb-16">
            <h2 className="text-amber-500 font-serif italic text-3xl mb-4">The Word on the Street</h2>
            <h3 className="text-4xl font-bold text-white mb-4">Trusted by Canberra's Finest</h3>
            <div className="flex justify-center space-x-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="text-amber-500 fill-amber-500" size={18} />)}
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review, idx) => (
              <Reveal key={review.id} delay={idx * 150} className="bg-[#0c0c0c] p-8 rounded-sm border border-white/5 relative hover-lift">
                <span className="absolute -top-4 -left-4 text-amber-500/20 text-8xl font-serif">"</span>
                <p className="text-gray-300 italic mb-6 relative z-10 leading-relaxed text-sm">"{review.comment}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">{review.name}</h4>
                    <p className="text-gray-500 text-[10px] uppercase tracking-widest">{review.date}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1512690136236-73069662a4b0?q=80&w=2070&auto=format&fit=crop" 
            alt="Barber Shop Chairs" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
        <Reveal className="relative z-10 text-center px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">Ready for Your Transformation?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">Skip the queue. Secure your appointment at M7 Barber Kippax today.</p>
          <Link to="/contact" className="inline-block bg-white text-black hover:bg-amber-500 hover:text-white px-12 py-5 rounded-sm font-bold uppercase tracking-widest text-sm transition-all shadow-xl active:scale-95">
            Book Appointment
          </Link>
        </Reveal>
      </section>
    </div>
  );
};

export default Home;
